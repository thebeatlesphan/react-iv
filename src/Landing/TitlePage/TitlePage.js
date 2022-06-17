import React from "react";
import classes from "./TitlePage.module.css";
import Button from "../../Components/Button/Button";
import Button2 from "../../Components/Button/Button2";
import iphone from "../../Images/iphone.png";
import car from "../../Images/car.png";
import cup from "../../Images/cafe.png";
import equalizer from "../../Images/custom.png";
import cases from "../../Images/Badge.png";
import science from "../../Images/Science.png";

const TitlePage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container2}>
        {/* FIRST SECTION */}
        <div className={classes.title}>
          <div>
            <h1>Drip Therapy</h1>
            <p>
              Your session starts with a conversation with your IV therapist. By
              understanding what you're looking to accomplish, your therapist
              can then pull from various product types and incorporate elements
              of them to address your specific needs.
            </p>
          </div>
          <div className={classes.titleButton}>
            <Button>Book an appointment</Button>
            <Button2>Become a member</Button2>
          </div>
        </div>

        {/* SECOND SECTION */}
        <div className={classes.secondTitle}>
          <div className={classes.secondHeading}>
            <h2>Feel like your best self again</h2>
            <p>
              The demands of daily life can be super taxing on your body. That's
              why it pays to take care of it. Drip Studio locations will help
              keep your body running smoothly, so you can run that half marathon
              or that full day of meetings.
            </p>
          </div>
          <div className={classes.images}>
            <div className={classes.image}>
              <img src={iphone} alt="iphone"></img>
              <h3>Schedule online</h3>
            </div>
            <div className={classes.image}>
              <img src={car} alt="car"></img>
              <h3>Mobile IV</h3>
            </div>
            <div className={classes.image}>
              <img src={cup} alt="cup"></img>
              <h3>Sit back and relax</h3>
            </div>
          </div>
        </div>

        {/* THIRD SECTION */}
        <div className={classes.thirdSection}>
          <h2>
            We do things a little differently and it makes a big difference
          </h2>
          <div className={classes.points}>
            <div className={classes.point}>
              <img src={equalizer} alt=""></img>
              <div>
                <h3>Customized Experience</h3>
                <p>Personalize your sessions with services & products</p>
              </div>
            </div>
            <div className={classes.point}>
              <img src={cases} alt=""></img>
              <div>
                <h3>Highly trained employees</h3>
                <p>Trained to meet industry-leading standards</p>
              </div>
            </div>
            <div className={classes.point}>
              <img src={science} alt=""></img>
              <div>
                <h3>Curated product lines</h3>
                <p>Complement your sessions & home care</p>
              </div>
            </div>
          </div>
        </div>

        {/* FOURTH SECTION */}
        <div className={classes.fourthSection}>
          <h2>
            <span>Look your best.</span>
            <span>Feel your best.</span>
            <span>Repeat.</span>
          </h2>
          <p>
            We're making it easy to sustain your self-care routine. Become a
            member and enjoy personalized sessions at lower rates, so you can
            experience the perks of monthly maintenance.
          </p>
          <div className={classes.fourthButton}>
            <Button2>Book an appointment</Button2>
          </div>
        </div>

        {/* FIFTH SECTION */}
        <div className={classes.fifthSection}>
          <div>
            <h2>Start feeling like yourself today</h2>
            <Button>Book an appointment</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
