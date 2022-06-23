import React, { useState } from "react";
import classes from "./Registration.module.css";
import RegistrationForm from "./RegistrationForm";

const Registration = () => {
  const [registration, startRegistration] = useState(false);

  const registrationHandler = () => {
    startRegistration((prevState) => !prevState);
  };

  return (
    <div className={classes.containerOne}>
      <div className={classes.advert}>
        <div className={classes.advertContainer}>
          <h2>
            IVonDemand
            {registration && <h3 className={classes.welcome}>Welcome to</h3>}
          </h2>
        </div>
      </div>
      <div className={classes.container}>
        {registration && <RegistrationForm />}
        {!registration && (
          <>
            <div className={classes.aboveForm}>
              <p>Welcome back!</p>
            </div>
            <div className={classes.formContainer}>
              <form className={classes.form}>
                <input
                  type="text"
                  placeholder="Enter Username"
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
                <span onClick={registrationHandler}> Get Started</span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Registration;
