import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.help}>
          <h3>Need help?</h3>
          <p>
            Call or text us <span>(xxx) xxx-xxxx</span>
          </p>
          <p>
            Email us <span>xxx@ivondemand.com</span>
          </p>
        </div>
        <h3>Get the app</h3>
        <div className={classes.app}>
          <div>App Store</div>
          <div>Google Play</div>
        </div>
        <div className={classes.contact}>
          <div className={classes.company}>
            <h3>Company Info</h3>
            <ul>
              <li>About us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Locations</li>
              <li>Press</li>
            </ul>
          </div>
          <div className={classes.social}>
            <h3>Social media</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className={classes.copyright}>
          <h4>2022 Phandy Productions</h4>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>HIPAA Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
