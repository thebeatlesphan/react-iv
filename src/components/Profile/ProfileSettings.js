import classes from "./ProfileSettings.module.css";
import Modal from "../UI/Modal";
import React from "react";

const ProfileSettings = (props) => {
  const customer = [
    {
      picture: ":)",
      firstName: "ADMIN",
      lastName: "ADMIN",
      address: "420 High Blvd",
      city: "Stoner",
      zip: 42069,
    },
  ];

  const customerDisplay = (
    <form className={classes.items}>
      <h3>Profile</h3>
      <input placeholder="Name"></input>
      <input placeholder="Address"></input>
      <div>
        <button onClick={props.onClose}>close</button>
        <button>update</button>
      </div>
    </form>
  );

  return <Modal onClose={props.onClose}>{customerDisplay}</Modal>;
};

export default ProfileSettings;
