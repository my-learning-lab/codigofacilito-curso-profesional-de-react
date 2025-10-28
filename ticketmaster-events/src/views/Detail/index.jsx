import { useParams } from "react-router";

const Detail = () => {
  const { eventId } = useParams();
  console.log(eventId);
  return <div>Detail</div>;
};

export default Detail;
