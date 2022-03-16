import React from "react";
import Faq from "./Faq";
import classes from "./FaqSection.module.css";

const FaqSection = () => {
  return (
    <div className={classes.faqh2}>
      <h2>Frequently Asked Questions</h2>
      <Faq
        question="What is IV Hydration?"
        answer="IV hydration is a simple treatment that delivers fluids directly
            through a small IV inserted into your arm."
      />
      <Faq
        question="Should I schedule an appointment?"
        answer="Of course you should!"
      />
      <Faq
        question="How do I have my business visible on IVonDemand?"
        answer="Talk to one of our project managers today!"
      />
      <Faq question="Will it hurt?" answer="Yes!" />
      <p className={classes.faq}>see more faq</p>
    </div>
  );
};

export default FaqSection;
