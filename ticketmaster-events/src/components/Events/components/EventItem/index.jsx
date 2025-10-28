import styles from "./EventItem.module.css";

const EventItem = ({ id, info, name, image, onEventClick }) => {
  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    onEventClick(id);
  };

  return (
    <div className={styles.eventItemContainer}>
      <img src={image} alt={name} width={200} height={200} />
      <div className={styles.eventInfoContainer}>
        <h4 className={styles.eventName}>{name}</h4>
        <p className={styles.eventInfo}>{info}</p>
        <button onClick={handleSeeMoreClick} className={styles.seeMoreBtn}>
          {/* <Link to={`/detail/${id}`}>Ver más</Link> */}
          Ver más
        </button>
      </div>
    </div>
  );
};

export default EventItem;
