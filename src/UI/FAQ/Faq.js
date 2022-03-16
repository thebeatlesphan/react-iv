import React, { useState } from "react";
import classes from "./Faq.module.css";

const Faq = (props) => {
  const [answer, showAnswer] = useState(false);

  const showAnswerHandler = () => {
    showAnswer((prev) => !prev);
  };

  return (
    <div className={classes.container}>
      <>
        <div className={classes.question} onClick={showAnswerHandler}>
          <div className={classes.arrow}>*</div>
          <h3>{props.question}</h3>
        </div>
        {answer && <p className={classes.answer}>{props.answer}</p>}
        <div className={classes.border}></div>
      </>
    </div>
  );
};

export default Faq;
