import React from "react";
import classes from "./Titlepage.module.css";

const Titlepage = () => {

  return (
    <>
      <div className={classes.title}>
        <h1>Premium IV Hydration Service</h1>
        <p>IVonDemand provides easy access to nation wide services.</p>
        <div className={classes.button}>
          <button>get started</button>
        </div>
      </div>
      <section className={classes.check}>
        <div>
          <h2>Check your area for IV services</h2>
          <form>
            <div className={classes.zipcode}>
              <label for="zipCode">Enter home or work zip code</label>
              <input type="type" name="zipCode" autoComplete="off"></input>
              <div className={classes.bottom}></div>
            </div>
            <input type="submit" value=">" disabled className={classes.submit}></input>
          </form>
        </div>
      </section>
    </>
  );
};

export default Titlepage;
