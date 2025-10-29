import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import useEventsData from "../../hooks/useEventsData";
import ReactPaginate from "react-paginate";
import styles from "./Home.module.css";
import useEventsResults from "../../state/events-results";

const Home = () => {
  // const { events, isLoading, error, fetchEvents, page } = useEventsData();
  const { data, isLoading, error, fetchEvents } = useEventsResults();
  const events = data?._embedded?.events || [];
  const page = data?.page || {};
  const [isToggle, setIsToggle] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();
  const fetchMyEventsRef = useRef();

  fetchMyEventsRef.current = fetchEvents;

  const handleNavbarSearch = (term) => {
    console.log(containerRef.current.setSearch(""));
    setSearchTerm(term);
    fetchEvents(`&keyword=${term}`);
  };

  const handlePageClick = useCallback(
    ({ selected }) => {
      console.log(searchTerm);
      fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
    },
    [searchTerm, fetchEvents]
  );

  useEffect(() => {
    fetchMyEventsRef.current();
  }, []);

  const renderEvents = () => {
    if (isLoading) {
      return <div>Cargando resultados...</div>;
    }

    if (error) {
      return <div>Ha ocurrido un error</div>;
    }

    return (
      <div>
        <button onClick={() => setIsToggle(!isToggle)}>
          {isToggle ? "ON" : "OFF"}
        </button>
        <Events searchTerm={searchTerm} events={events} />
        <ReactPaginate
          className={styles.pagination}
          nextClassName={styles.next}
          previousClassName={styles.previous}
          pageClassName={styles.page}
          activeClassName={styles.activePage}
          disabledClassName={styles.disabledPage}
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={page?.totalPages || 0}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    );
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      {renderEvents()}
    </>
  );
};

export default Home;
