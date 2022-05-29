import React from "react";
import classes from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.options}>
        <div className={classes.top}>
          <h2>IVonDemand</h2>
          <p onClick={props.sidebar}>X</p>
        </div>
        <p>Treatments</p>
        <p>Pricing</p>
        <p>About Us</p>
        <p>Resources</p>
        <p>Contact</p>
      </div>
      <div className={classes.exit} onClick={props.sidebar}></div>
    </div>
  );
};

export default Sidebar;
