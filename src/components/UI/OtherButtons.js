import classes from "./OtherButtons.module.css";
import React from "react";

const OtherButtons = (props) => {
  return (
    <>
      <button
        type={props.type || "button"}
        className={`${classes.button} ${props.className}`}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </>
  );
};

export default OtherButtons;
