import React from "react";
import classes from "./Header.module.css";
import logo from "../../Images/logo.png";

const Header = () => {
  return (
    <nav className={classes.header}>
      <img src={logo} className={classes.logo}></img>
      <ul className={classes.nav}>
        <li>Treatments</li>
        <li>Pricing</li>
        <li>About Us</li>
        <li>Resources</li>
        <li>Contact</li>
        <button className={classes.button}>Log In</button>
      </ul>
    </nav>
  );
};

export default Header;
