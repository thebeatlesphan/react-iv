import React, { useContext } from "react";
import classes from "./Navigation.module.css";
import Button from "../UI/Button";
import AuthContext from "../../store/auth-context";

const Navigation = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        <li>Why IVonDemand?</li>
        <li>Resources</li>
        <li>Products</li>
        <li>Contact Us</li>
        <Button>Get Started!</Button>
        {authCtx.isLoggedIn && (
          <Button onClick={authCtx.onLogout}>logout</Button>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
