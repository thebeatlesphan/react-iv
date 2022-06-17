import React from "react";
import classes from "./NavButton.module.css";

const NavButton = (props) => {
  return <button className={classes.button}>{props.children}</button>;
};

export default NavButton;
