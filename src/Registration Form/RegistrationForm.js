import React from "react";
import classes from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  return (
    <div className={classes.formContainer}>
      <h2>REGISTRATION</h2>
      <div>
        <form className={classes.form}>
          <input type="text" placeholder="First Name"></input>
          <input type="text" placeholder="Last Name"></input>
          <input type="text" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
          <input type="password" placeholder="Repeat Password"></input>
          <div>
            <input type="checkbox"></input>
            <label className={classes.sentence}>
              Subscribe to our newsletter
            </label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label className={classes.sentence}>
              Agree to terms and conditions
            </label>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
