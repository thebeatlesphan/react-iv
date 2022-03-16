import React from "react";
import classes from "./Information.module.css";

const Information = () => {
  return (
    <div className={classes.container}>
      <h2>Why choose IVonDemand</h2>
      <div className={classes.display}>
        <div className={classes.picture}>
          <p>$$$</p>
        </div>
        <p className={classes.pictureWords}>
          Free Delivery with orders over $1 mil
        </p>
      </div>

      <div className={classes.display}>
        <div className={classes.picture}>
          <p >24 / 7</p>
        </div>
        <p className={classes.pictureWords}>24-hour support from certified professionals</p>
      </div>

      <div className={classes.display}>
        <div className={classes.picture}>
          <p className={classes.pictureWords}>Yay</p>
        </div>
        <p className={classes.pictureWords}> Money back guarantee if not 100% satisfied</p>
      </div>
    </div>
  );
};

export default Information;
