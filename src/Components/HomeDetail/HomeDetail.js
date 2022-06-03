import { useNavigate, useParams } from "react-router-dom";
import Fav from "../Favourites/Fav";
import Home from "../Home/Home";
import Detail from "./Detail";
import classes from "./HomeDetail.module.css";
function HomeDetail(props) {
  const params = useParams();
  const navigate = useNavigate();
  function navigateBack(event) {
    if (!event.target.closest("#card2") && !event.target.closest("#options"))
      navigate(props.page);
  }
  return (
    <div className={classes.container}>
      {props.page == "/home" && <Home onClick={navigateBack} />}
      {props.page == "/fav" && <Fav onClick={navigateBack} />}
      <Detail id={params.bookId} />
    </div>
  );
}
export default HomeDetail;
