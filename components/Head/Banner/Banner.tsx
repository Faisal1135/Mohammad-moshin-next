import React from "react";
import style from "./Banner.module.css";
import AppBar from "../MyNavbar/AppBar";

const Banner = () => {
  return (
    <div className={`${style.banner} text-white`}>
      <AppBar />
    </div>
  );
};

export default Banner;
