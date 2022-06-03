import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./Detail.module.css";
import { AiOutlineClose } from "react-icons/ai";
const Detail = (props) => {
  const books = useSelector((state) => state.books);

  if (localStorage.getItem("booksData")) {
    localStorage.setItem("booksData", JSON.stringify(books));
  }
  const navigate = useNavigate();
  const [bookObj] = books.books.filter((elem) => {
    if (props.id == elem.id) return elem;
    return "";
  });

  function closeDetailsHandler() {
    navigate(-1);
  }
  return (
    <div className={classes.details}>
      <AiOutlineClose
        className={classes.closeIcon}
        onClick={closeDetailsHandler}
      />
      <h3 className={classes.heading}>About the book</h3>
      <img src={bookObj.imageUrl} alt="" className={classes.image} />
      <p className={classes.title}>{bookObj.title}</p>
      <p className={classes.author}>{bookObj.author}</p>
      <div className={classes.infoRow}>
        <div className={classes.col}>
          <span className={classes.property}>First Published</span>
          <br />
          <span className={classes.value}>{bookObj.year}</span>
        </div>
        <span className={classes.verticalBar}>|</span>
        <div className={classes.col}>
          <span className={classes.property}>Price</span>
          <br />
          <span className={classes.value}>{bookObj.price}</span>
        </div>
      </div>
      <p className={classes.genres}>
        <span>Genres : </span> {bookObj.genre}
      </p>
      <div className={classes.plot}>
        <h4 className={classes.plotHeading}>About</h4>
        <p className={classes.about}>{bookObj.about}</p>
      </div>
    </div>
  );
};
export default Detail;
