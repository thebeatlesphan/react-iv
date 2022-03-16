import React from "react";
import classes from "./Howto.module.css";

const Howto = () => {
  return (
    <div className={classes.container}>
      <h2>How IVonDemand works</h2>

      <div className={classes.container2}>
        <div className={classes.download}>
          <div>* 1 *</div>
          <h3>Sign up for IVonDemand</h3>
          <p>
            Your account will provide you nationwide access to IV professionals.
          </p>
        </div>

        <div className={classes.download}>
          <div>* 2 *</div>
          <h3>Locate your desired vendor</h3>
          <p>Peruse vendors and schedule an appointment.</p>
        </div>

        <div className={classes.download}>
          <div>* 3 *</div>
          <h3>Hydrate!</h3>
          <p>
            Your appointment will then be curated by a certified professional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Howto;
