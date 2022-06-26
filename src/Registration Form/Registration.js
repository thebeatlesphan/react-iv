import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import classes from "./Registration.module.css";
import RegistrationForm from "./RegistrationForm";

const Registration = () => {

  const loginhandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.containerOne}>
      <div className={classes.advert}>
        <div className={classes.advertContainer}>
          <h2>
            IVonDemand
            <Route path="/registration/form">
              <span className={classes.welcome}>Welcome to</span>
            </Route>
          </h2>
        </div>
      </div>
      <div className={classes.container}>
        <Route path="/registration" exact>
          <div className={classes.aboveForm}>
            <p>Welcome back!</p>
          </div>
          <div className={classes.formContainer}>
            <form className={classes.form} onSubmit={loginhandler}>
              <input
                type="text"
                placeholder="Enter Email"
                name="uname"
                required
              ></input>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              ></input>
              <button type="submit" value="submit">
                Login
              </button>
            </form>
          </div>
          <div className={classes.belowForm}>
            <p>Forgot your password?</p>
            <p>
              Don't have an account?
              <Link to="/registration/form">
                <span> Get Started</span>
              </Link>
            </p>
          </div>
        </Route>
        <Route path="/registration/form">
          <RegistrationForm />
        </Route>
      </div>
    </div>
  );
};

export default Registration;
