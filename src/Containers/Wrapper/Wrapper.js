import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import FormPage from "../../Components/Form/FormPage";
import Fav from "../../Components/Favourites/Fav";
import Home from "../../Components/Home/Home";
import HomeDetail from "../../Components/HomeDetail/HomeDetail";
import classes from "./Wrapper.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
const Wrapper = () => {
  const params = useParams();
  const [isShifted, setIsShifted] = useState(false);
  if (params.bookId) {
    setIsShifted(true);
  }
  return (
    <React.Fragment>
      <div className={classes.wrapper}>
        <Navbar shifted={isShifted} />

        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path={`/addBook/:bookId`} element={<FormPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/fav" element={<Fav />} />
          <Route path="/home/:bookId" element={<HomeDetail page="/home" />} />
          <Route path="/fav/:bookId" element={<HomeDetail page="/fav" />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};
export default Wrapper;
