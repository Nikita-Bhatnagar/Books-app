import classes from "./FormPage.module.css";
import image from "../../images/booksImg.jpg";
import Form from "./Form";
const FormPage = () => {
  return (
    <div className={classes.formContainer}>
      <div className={classes.col1}>
        <h2 className={classes.heading}>Books</h2>
        <div className={classes.row}>
          <p className={classes.quote}>
            “To librarians, booksellers, and collectors there is nothing limited
            in the subject of books about books.” ― Leona Rostenberg, Old Books,
            Rare Friends: Two Literary Sleuths and Their Shared Passion
          </p>
          <img src={image} alt="" className={classes.formImg} />
        </div>
      </div>
      <div className={classes.col2}>
        <Form />
      </div>
    </div>
  );
};
export default FormPage;
