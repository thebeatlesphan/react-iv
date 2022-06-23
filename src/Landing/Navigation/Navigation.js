import React, { useState } from "react";
import classes from "./Navigation.module.css";
import logo from "../../Images/logo.png";
import NavButton from "../../Components/Button/NavButton";
import Sidebar from "./Sidebar";

const Navigation = (props) => {
  const [side, showSide] = useState(false);

  const sidebarHandler = () => {
    showSide((prevState) => !prevState);
  };

  return (
    <>
      <Sidebar transition={side} sidebar={sidebarHandler} />
      <div className={classes.container}>
        <nav>
          <div className={classes.left}>
            <div className={classes.hamburger} onClick={sidebarHandler}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <img src={logo} className={classes.logo} alt="logo" />
          </div>
          <div className={classes.options}>
            <p>Treatments</p>
            <p>Pricing</p>
            <p>About Us</p>
            <p>Resources</p>
            <p>Contact</p>
            <NavButton onClick={props.showLogin}>Register</NavButton>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
