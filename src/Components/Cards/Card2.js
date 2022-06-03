import classes from "./Card2.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import bookActions from "../../Store/BooksDataSlice.js";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
const Card2 = (props) => {
  const [isDisplayingOptions, setIsDisplayingOptions] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const page = location.pathname.includes("home") ? "/home" : "/fav";
  function displayOptionsHandler(event) {
    setIsDisplayingOptions(true);
  }
  function hideOptionsHandler() {
    setIsDisplayingOptions(false);
  }
  function deleteHandler(event) {
    const id = event.currentTarget.closest("#card2").dataset["id"];

    dispatch(bookActions.remove(id));
    setIsDisplayingOptions(false);
    if (id == params.bookId) navigate(page, { replace: true });
  }
  function editHandler(event) {
    const id = event.currentTarget.closest("#card2").dataset["id"];

    navigate(`/addBook/${id}`, { replace: true });
    setIsDisplayingOptions(false);
  }
  function favouriteHandler(event) {
    const id = event.currentTarget.closest("#card2").dataset["id"];

    dispatch(bookActions.addRemoveFav({ id }));
    setIsDisplayingOptions(false);
  }

  return (
    <div
      className={classes.card2}
      id="card2"
      data-id={props.id}
      onMouseLeave={hideOptionsHandler}
    >
      <img src={props.imageUrl} alt="" className={classes.img} />
      <Link to={`${page}/${props.id}`}>
        <p className={classes.title}>{props.title}</p>
        <p className={classes.author}>{props.author}</p>
      </Link>
      {props.fav && <FaHeart className={classes.fav} />}
      <BsThreeDotsVertical
        className={classes.dotIcon}
        onMouseEnter={displayOptionsHandler}
      />

      {isDisplayingOptions && (
        <div className={classes.options}>
          <ul className={classes.optionList} id="options">
            <li className={classes.optionsItem} onClick={deleteHandler}>
              <MdDelete className={classes.icon} />
              Delete
            </li>
            <li className={classes.optionsItem} onClick={editHandler}>
              <MdModeEditOutline className={classes.icon} />
              Edit
            </li>
            <li className={classes.optionsItem} onClick={favouriteHandler}>
              <FaHeart className={classes.icon} />
              {props.fav ? "Remove" : "Add to favourites"}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Card2;
