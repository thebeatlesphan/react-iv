import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <nav className={classes.header}>
      <p className={classes.logo}>LOGO</p>
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
