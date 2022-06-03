import { useSelector } from "react-redux";
import Card2 from "../Cards/Card2";
import classes from "./Fav.module.css";
const Fav = (props) => {
  const books = useSelector((state) => state.books);
  if (localStorage.getItem("booksData")) {
    localStorage.setItem("booksData", JSON.stringify(books));
  }

  let cards2 = [];
  for (let i = 0; i < books.books.length; i++) {
    let elem = books.books[i];
    if (elem.fav) {
      cards2.push(
        <Card2
          id={elem.id}
          key={elem.id}
          title={elem.title}
          author={elem.author}
          imageUrl={elem.imageUrl}
          price={elem.price}
          genre={elem.genre}
          year={elem.year}
          fav={elem.fav}
        />
      );
    }
  }

  return (
    <div className={classes.container} onClick={props.onClick}>
      <section className={classes.list}>
        <h2 className={classes.heading}>Your Favourites</h2>
        {cards2.length == 0 && (
          <p className={classes.noFav}>
            The books you add to favourites will appear here.
          </p>
        )}
        <div className={classes.bookContainer}>{cards2}</div>
      </section>
    </div>
  );
};
export default Fav;
