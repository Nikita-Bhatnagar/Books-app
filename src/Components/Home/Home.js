import store from "../../Store/Store";
import { useSelector } from "react-redux";
import classes from "./Home.module.css";
import Card1 from "../Cards/Card1";
import Card2 from "../Cards/Card2";
const Home = (props) => {
  const books = useSelector((state) => state.books);

  if (localStorage.getItem("booksData")) {
    localStorage.setItem("booksData", JSON.stringify(books));
  }
  const cards1 = books.books
    .slice(books.books.length - 5, books.books.length)
    .map((elem) => {
      return (
        <Card1
          id={elem.id}
          key={elem.id}
          title={elem.title}
          author={elem.author}
          imageUrl={elem.imageUrl}
          price={elem.price}
          genre={elem.genre}
          year={elem.year}
        />
      );
    });
  //const cards2 = [];
  const cards2 = books.books.map((elem) => {
    return (
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
  });

  return (
    <div className={classes.container} onClick={props.onClick}>
      <section className={classes.recents}>
        <h2 className={classes.heading}>Recently added</h2>
        <div className={classes.row}>{cards1}</div>
      </section>
      <section className={classes.list}>
        <h2 className={classes.heading}>Collection</h2>

        <div className={classes.bookContainer}>{cards2}</div>
      </section>
    </div>
  );
};
export default Home;
