import React from "react";
import ReactDOM from "react-dom";
import classes from "./Registration.module.css";

const Registration = () => {
  return (
    <div className={classes.container}>
      <div className={classes.aboveForm}>
        <p>Welcome back to IVonDemand!</p>
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
          <button type="submit">Login</button>
        </form>
      </div>
      <div className={classes.belowForm}>
        <p>Forgot your password?</p>
        <p>Don't have an account? Get Started!</p>
      </div>
    </div>
  );
};

const LoginModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Registration />,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Registration;
