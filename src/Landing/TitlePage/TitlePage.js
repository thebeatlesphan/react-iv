import React from "react";
import classes from "./TitlePage.module.css";

const Titlepage = () => {
  return (
    <div className={classes.title}>
      <div className={classes.drip}>
        <h1>Drip Therapy</h1>
        <p>
          Your session starts with a conversation with your IV therapist. By
          understanding what you're looking to accomplish, your therapist can
          then pull from various product types and incorporate elements of them
          to address your specific needs.
        </p>
      </div>
      <div className={classes.button}>
        <button>Book an appointment</button>
        <button>Become a member</button>
      </div>
    </div>
  );
};

export default Titlepage;
