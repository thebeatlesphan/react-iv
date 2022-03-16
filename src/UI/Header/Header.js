import React, { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import classes from "./Header.module.css";

const Header = () => {
  const [nav, setShowNav] = useState(false);

  const showNavHandler = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <div className={classes.header}>
      <div className={classes.hamburger} onClick={showNavHandler}>
        =
      </div>
      <div className={classes.logo}>IVonDemand</div>
      {nav && <Hamburger closeNav={showNavHandler} />}
    </div>
  );
};

export default Header;
