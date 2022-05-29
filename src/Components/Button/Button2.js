import React from "react";
import classes from "./Button2.module.css";

const Button2 = (props) => {
  return <button className={classes.button}>{props.children}</button>;
};

export default Button2;
