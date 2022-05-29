import React from "react";
import classes from "./Navigation.module.css";
import logo from "../../Images/logo.png";
import Button from "../../Components/Button/Button";

const Navigation = (props) => {
  return (
    <nav>
      <div className={classes.left}>
        <div className={classes.hamburger} onClick={props.sidebar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <img src={logo} className={classes.logo} />
      </div>
      <div className={classes.options}>
        <p>Treatments</p>
        <p>Pricing</p>
        <p>About Us</p>
        <p>Resources</p>
        <p>Contact</p>
        <Button>Log In</Button>
      </div>
    </nav>
  );
};

export default Navigation;
