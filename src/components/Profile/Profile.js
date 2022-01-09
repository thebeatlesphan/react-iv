import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./Profile.module.css";
import BlankProfile from "../../images/blank-profile";
import OtherButtons from "../UI/OtherButtons";
import SettingsIcon from "../../images/SettingsIcon";
import ShoppingCart from "../../images/ShoppingCart";
import History from "../../images/History";
import Help from "../../images/Help";
import Logout from "../../images/Logout";
 
const Profile = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <div className={classes.profile}>
        <span>
          <h3>Welcome ADMIN!</h3>
        </span>
        <span className={classes["svg-icon"]}>
          <BlankProfile />
        </span>
      </div>
      <div className={classes.otherButtonsOne}>
        <OtherButtons onClick={props.onShowProfile}>
          <BlankProfile />
          profile
        </OtherButtons>
        <OtherButtons onClick={props.onShowCart}>
          <ShoppingCart />
          cart
        </OtherButtons>
        <OtherButtons>
          <History />
          history
        </OtherButtons>
      </div>
      <div className={classes.otherButtonsTwo}>
        <OtherButtons>
          <Help />
          help
        </OtherButtons>
        <OtherButtons>
          <SettingsIcon />
          settings
        </OtherButtons>
        <OtherButtons onClick={authCtx.onLogout}>
          <Logout />
          logout
        </OtherButtons>
      </div>
    </>
  );
};

export default Profile;
