import React from "react";
import classes from "./Contact.module.css";

const Contact = (props) => {
  return (
    <div className={classes["footer-background"]}>
      <footer className={classes.footer}>
      <hr />
      <h2 className={classes.founders}>Founders</h2>
        <nav className={classes.nav}>
          <ul>
            <h3>Developers / Engineers</h3>
            <li>Thi Nguyen</li>
            <li>Mimi Vo</li>
            <li>Vinh Phan</li>
            <li>Andrews Nguyen-Phan</li>
          </ul>
          <ul>
            <h3>Design</h3>
            <li>Ryan Pursel</li>
          </ul>
          <ul>
            <h3>Medical Expertise</h3>
            <li>Tim Fischer</li>
            <li>Ryan Pursel</li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Contact;