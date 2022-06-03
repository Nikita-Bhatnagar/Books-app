import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = (props) => {
  const [isDisplayingMenu, setIsDisplayingMenu] = useState(false);
  function toggleMenu() {
    setIsDisplayingMenu((prev) => !prev);
  }
  return (
    <nav className={classes.navbar}>
      <div className={classes.row}>
        <div className={classes.brandName}>
          <h1>BOOKS</h1>
        </div>
        <ul
          className={`${classes.navItems} ${
            !isDisplayingMenu ? classes.verNavHide : ""
          }`}
        >
          <li className={classes.navItem}>
            <NavLink
              className={(navItem) =>
                navItem.isActive ? classes.selected : ""
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink
              className={(navItem) =>
                navItem.isActive ? classes.selected : ""
              }
              to="/addBook/_"
            >
              Add Book
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink
              className={(navItem) =>
                navItem.isActive ? classes.selected : ""
              }
              to="/fav"
            >
              Favourites
            </NavLink>
          </li>
        </ul>
        <AiOutlineMenu className={classes.menuIcon} onClick={toggleMenu} />
      </div>
      <hr className={classes.hr} />
    </nav>
  );
};
export default Navbar;
