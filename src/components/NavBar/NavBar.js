import React, { useState } from "react";
import classes from "./NavBar.module.css";
import Navigation from "./Navigation";

const NavBar = () => {
  const [toggled, setToggled] = useState(false);

  const toggleChangeHandler = () => {
    setToggled((prev) => !prev);
  };

  return (
    <div>
      <header className={classes["main-header"]}>
        <div className={classes.logo}>IVonDemand</div>
        <div
          className={classes.toggle}
          onClick={toggleChangeHandler}
          value={toggled}
        >
        =
        </div>
      </header>
      {toggled && <Navigation onClick={toggleChangeHandler}/>}
    </div>
  );
};
export default NavBar;
