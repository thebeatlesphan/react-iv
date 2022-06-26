import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import classes from "./RegistrationForm.module.css";

const RegistrationForm = (props) => {
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [matchingPasswords, setMatchingPasswords] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const firstPassword = useRef();
  const repeatPassword = useRef();

  const emailHandler = (event) => {
    let userEmail = event.target.value.split("");
    console.log(userEmail);
    if (!userEmail.includes("@") && userEmail.length > 0) {
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
    }
  };

  const passwordhandler = () => {
    if (firstPassword.current.value === repeatPassword.current.value) {
      setMatchingPasswords(true);
    } else {
      setMatchingPasswords(false);
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.formContainer}>
      <h2>REGISTRATION</h2>
      <div>
        <form className={classes.form} onSubmit={formHandler}>
          <input type="text" placeholder="First Name" required></input>
          <input type="text" placeholder="Last Name" required></input>
          <input
            type="text"
            placeholder="Email"
            onBlur={emailHandler}
            className={`${emailIsValid ? "" : classes.invalid}`}
            required
          ></input>
          <div
            className={`${classes.password} ${
              !matchingPasswords && classes.passwordMismatch
            }`}
          >
            <input
              type="password"
              placeholder="Password"
              ref={firstPassword}
              className={`${matchingPasswords ? "" : classes.invalid}`}
              required
            ></input>
            <input
              type="password"
              placeholder="Repeat Password"
              ref={repeatPassword}
              onBlur={passwordhandler}
              className={`${classes.password} ${
                matchingPasswords ? "" : classes.invalid
              }`}
              required
            ></input>
          </div>
          <div>
            <input type="checkbox"></input>
            <label className={classes.sentence}>
              Subscribe to our newsletter
            </label>
          </div>
          <div>
            <input type="checkbox" required></input>
            <label className={classes.sentence}>
              Agree to terms and conditions*
            </label>
          </div>
          <button type="submit" disabled={!formIsValid}>
            Register
          </button>
        </form>
      </div>
      <p className={classes.member}>
        Already a member?{" "}
        <Link to="/registration">
          <span onClick={props.login}>Sign in</span>
        </Link>
      </p>
    </div>
  );
};

export default RegistrationForm;
