import React from "react";
import classes from "./Navigation.module.css";
import logo from "../../Images/logo.png";

const Navigation = () => {
  return (
    <nav>
      <div className={classes.left}>
        <div className={classes.hamburger}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <img src={logo} className={classes.logo} />
      </div>
      <div className={classes.search}>
        <div className={classes.mag}>
          <div></div>
          <div></div>
        </div>
        <span>SEARCH</span>
      </div>
    </nav>
  );
};

export default Navigation;
