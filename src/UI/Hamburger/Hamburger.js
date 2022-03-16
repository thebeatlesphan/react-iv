import React from "react";
import classes from "./Hamburger.module.css";

const Hamburger = (props) => {
  return (
    <nav>
      <div className={classes.main}>
        <div className={classes.x} onClick={props.closeNav}>x</div>
        <h2>IVonDemand</h2>
        <div className={classes.button}>
          <button>get started</button>
        </div>
        <ul>
          <li>How It Works</li>
          <li>About Us</li>
          <li>Locations</li>
          <li>FAQ</li>
          <li>Sign In</li>
        </ul>
      </div>
    </nav>
  );
};

export default Hamburger;
