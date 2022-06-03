import React, { useState } from "react";
import classes from "./Form.module.css";
import bookActions from "../../Store/BooksDataSlice.js";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
const Form = (props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const edit = params.bookId !== "_";
  let bookObj = {};
  if (edit) {
    [bookObj] = JSON.parse(localStorage.getItem("booksData")).books.filter(
      (elem) => {
        if (elem.id == params.bookId) return elem;
      }
    );
  }
  const [title, setTitle] = useState(bookObj.title);
  const [author, setAuthor] = useState(bookObj.author);
  const [price, setPrice] = useState(bookObj.price);
  const [year, setYear] = useState(bookObj.year);
  const [url, setUrl] = useState(bookObj.imageUrl);
  const [genre, setGenre] = useState(bookObj.genre);
  const [about, setAbout] = useState(bookObj.about);
  function editHandler() {
    const Obj = {
      title,
      author,
      year,
      imageUrl: url,
      price,
      genre,
      id: params.bookId,
      fav: bookObj.fav,
      about,
    };
    dispatch(bookActions.update(Obj));
  }
  function titleHandler(e) {
    setTitle(e.target.value);
  }
  function authorHandler(e) {
    setAuthor(e.target.value);
  }
  function yearHandler(e) {
    setYear(e.target.value);
  }
  function priceHandler(e) {
    setPrice(e.target.value);
  }
  function urlHandler(e) {
    setUrl(e.target.value);
  }
  function genreHandler(e) {
    setGenre(e.target.value);
  }
  function aboutHandler(e) {
    setAbout(e.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    if (edit) {
      editHandler();
    } else {
      const now = new Date();
      const bookObj = {
        title,
        author,
        year,
        imageUrl: url,
        price,
        genre,
        id: now.getTime(),
        fav: false,
        about,
      };

      dispatch(bookActions.add(bookObj));
    }
    setTitle("");
    setAuthor("");
    setGenre("");
    setPrice("");
    setUrl("");
    setYear("");
    setAbout("");
    navigate("/home", { replace: true });
  }
  return (
    <React.Fragment>
      <h2 className={classes.heading}>
        {!edit ? "Add New Book" : "Edit Details"}
      </h2>
      <p className={classes.para}>
        {`Enter the details of the book you want to ${
          !edit ? "add to the collection" : "edit"
        }`}
      </p>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.row}>
          <div className={classes.col}>
            <label htmlFor="title">Book Title:</label>
            <input
              className={classes.input}
              type="text"
              id="title"
              value={title}
              onChange={titleHandler}
            />
            <label htmlFor="author">Author's Name:</label>
            <input
              className={classes.input}
              type="text"
              id="author"
              value={author}
              onChange={authorHandler}
            />
            <label htmlFor="price">Price:</label>
            <input
              className={classes.input}
              type="number"
              id="price"
              min="0"
              value={price}
              onChange={priceHandler}
            />
          </div>
          <div className={classes.col}>
            <label htmlFor="genre">Genres:</label>
            <input
              type="text"
              id="genre"
              placeholder="Enter a comma separated list of genres"
              className={classes.input}
              value={genre}
              onChange={genreHandler}
            />
            <label htmlFor="img">Image url:</label>
            <input
              type="url"
              id="img"
              className={classes.input}
              value={url}
              onChange={urlHandler}
            />
            <label htmlFor="year">Publishing Year:</label>
            <input
              className={classes.input}
              type="number"
              id="year"
              value={year}
              onChange={yearHandler}
            />
          </div>
        </div>
        <label htmlFor="about">About: </label>
        <textarea
          id="about"
          rows="5"
          cols="87"
          value={about}
          onChange={aboutHandler}
        ></textarea>
        <button type="submit" className={classes.btn}>
          {!edit ? "Register Book" : "Edit Book"}
        </button>
      </form>
    </React.Fragment>
  );
};
export default Form;
