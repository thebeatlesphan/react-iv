import React, { useState, useContext, useReducer, useEffect } from "react";
import classes from "./Front.module.css";
import AuthContext from "../../store/auth-context";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Profile from "../Profile/Profile";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val === "admin@admin.com" };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value === "admin@admin.com" };
  }
  return { value: "wow", isValid: null };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val === "admin" };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value === "admin" };
  }
  return { value: "wow", isValid: null };
};

const Front = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const authCtx = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "admin@admin.com",
    isValid: true,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "admin",
    isValid: true,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("checking validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 300);

    return () => {
      console.log("cleanup");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      console.log("submitted");
      authCtx.onLogin(emailState.value, passwordState.value);
    }
  };

  return (
    <>
      <div className={classes.front}>
        {!authCtx.isLoggedIn && (
          <div className={classes.title}>
            <h1>
              <span>IV On Demand</span>
              <span>stick it in the vein</span>
            </h1>
          </div>
        )}
        <div className={classes.card}>
          <form onSubmit={submitHandler}>
            {!authCtx.isLoggedIn && (
              <Input
                type="email"
                id="email"
                placeholder=" email"
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
                isValid={emailIsValid}
                value={emailState.value}
              />
            )}
            {!authCtx.isLoggedIn && (
              <Input
                type="password"
                id="password"
                placeholder=" password"
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
                isValid={passwordIsValid}
                value={passwordState.value}
              />
            )}
            {!authCtx.isLoggedIn && (
              <Button type="submit" disabled={!formIsValid}>
                login
              </Button>
            )}
            {authCtx.isLoggedIn && (
              <Profile
                onShowCart={props.onShowCart}
                onShowProfile={props.onShowProfile}
              />
            )}
          </form>
        </div>
      </div>
    </>
  );
};
export default Front;
