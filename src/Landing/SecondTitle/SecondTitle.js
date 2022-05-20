import React from "react";
import classes from "./SecondTitle.module.css";
import phone from "../../Images/iphone.png";
import car from "../../Images/Vector.png";
import cup from "../../Images/cafe.png";
import girl from "../../Images/girl.png";
import science from "../../Images/Science.png";
import badge from "../../Images/Badge.png";
import custom from "../../Images/custom.png";

const SecondTitle = () => {
  return (
    <div className={classes.container}>
      <div className={classes.first}>
        <div className={classes.H2}>
          <h2>Feel like your best self again</h2>
          <p>
            The demands of daily life can be super taxing on yoru body. That's
            why it pays to take care of it. Drip Studio locations will help keep
            your body running smoothly, so you can run that half marathon or
            that full day of meetings.
          </p>
        </div>
        <div className={classes.icons}>
          <div className={classes.icon}>
            <img src={phone}></img>
            <p>Schedule online</p>
          </div>
          <div className={classes.icon}>
            <img src={car}></img>
            <p>Mobile IV</p>
          </div>
          <div className={classes.icon}>
            <img src={cup}></img>
            <p>Sit back and relax</p>
          </div>
        </div>
      </div>
      <div className={classes.second}>
        <img className={classes.girl} src={girl}></img>
        <div className={classes.things}>
          <h2>
            We do things a little differently and it makes a big difference
          </h2>
          <div className={classes.thing}>
            <div className={classes.smallThing}>
              <img src={custom}></img>
              <div>
                <h3>Customized experiences</h3>
                <p>Personalize your sessions with services & products</p>
              </div>
            </div>
            <div className={classes.smallThing}>
              <img src={badge}></img>
              <div>
                <h3>Highly trained employees</h3>
                <p>Trained to meet industry-leading standards</p>
              </div>
            </div>
            <div className={classes.smallThing}>
              <img src={science}></img>
              <div>
                <h3>Curated product lines</h3>
                <p>Complement your sessions & home care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondTitle;
