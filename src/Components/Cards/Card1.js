import classes from "./Card1.module.css";
const Card1 = (props) => {
  return (
    <div className={classes.card1}>
      <div className={classes.row}>
        <img src={props.imageUrl} alt="" className={classes.img} />
        <div className={classes.info}>
          <p className={classes.title}>{props.title}</p>
          <p className={classes.author}>{props.author}</p>
          <p className={classes.genres}>{props.genre}</p>
        </div>
      </div>
    </div>
  );
};
export default Card1;
