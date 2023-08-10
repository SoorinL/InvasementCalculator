import React, { useState } from "react";
import styles from "./InvestmentInput.module.css";

const InvestmentInput = (props) => {
  const [enteredCurrentSavings, setCurrentSavings] = useState("");
  const [enteredYearlyContribution, setYearlyContribution] = useState("");
  const [enteredExpectedReturn, setExpectedReturn] = useState("");
  const [enteredDuration, setDuration] = useState("");

  const [isCurrentSavingsValid, setIsCurrentSavingsValid] = useState(true);
  const [isYearlyContributionValid, setYearlyContributionValid] =
    useState(true);
  const [isExpectedReturnValid, setIsExpectedReturnValid] = useState(true);
  const [isDurationValid, setIsDurationValid] = useState(true);

  //   const currentSavingsHandler = (event) => {
  //     setCurrentSavings(event.target.value);
  //   };
  //   const yearlyContributionHandler = (event) => {
  //     setYearlyContribution(event.target.value);
  //   };
  //   const expectedReturnHandler = (event) => {
  //     setExpectedReturn(event.target.value);
  //   };
  //   const durationHandler = (event) => {
  //     setDuration(event.target.value);
  //   };

  const inputChangeHandler = (identifier, value) => {
    // if (value.trim().length() > 0) {
    //   setIsValid(true);
    // }
    if (identifier === "currentSaving") {
      setCurrentSavings(value);
    } else if (identifier === "yearlyContribution") {
      setYearlyContribution(value);
    } else if (identifier === "expectedReturn") {
      setExpectedReturn(value);
    } else {
      setDuration(value);
    }
  };

  const resetHandler = () => {
    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setIsCurrentSavingsValid(true);
    setYearlyContributionValid(true);
    setIsExpectedReturnValid(true);
    setIsDurationValid(true);

    if (enteredCurrentSavings.trim().length === 0) {
      setIsCurrentSavingsValid(false);
      return;
    }
    if (enteredYearlyContribution.trim().length === 0) {
      setYearlyContributionValid(false);
      return;
    }
    if (enteredExpectedReturn.trim().length === 0) {
      setIsExpectedReturnValid(false);
      return;
    }
    if (enteredDuration.trim().length === 0) {
      setIsDurationValid(false);
      return;
    }

    props.onCalculate({
      "current-savings": enteredCurrentSavings,
      "yearly-contribution": enteredYearlyContribution,
      "expected-return": enteredExpectedReturn,
      duration: enteredDuration,
    });
  };

  return (
    <div>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.input_group}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={(event) => {
                inputChangeHandler("currentSaving", event.target.value);
              }}
              style={{
                backgroundColor: isCurrentSavingsValid
                  ? "transparent"
                  : "salmon",
              }}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={(event) => {
                inputChangeHandler("yearlyContribution", event.target.value);
              }}
              style={{
                backgroundColor: isYearlyContributionValid
                  ? "transparent"
                  : "salmon",
              }}
            />
          </p>
        </div>
        <div className={styles.input_group}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={(event) => {
                inputChangeHandler("expectedReturn", event.target.value);
              }}
              style={{
                backgroundColor: isExpectedReturnValid
                  ? "transparent"
                  : "salmon",
              }}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={(event) => {
                inputChangeHandler("duration", event.target.value);
              }}
              style={{
                backgroundColor: isDurationValid ? "transparent" : "salmon",
              }}
            />
          </p>
        </div>
        <p className={styles.actions}>
          <button
            type="reset"
            className={styles.buttonAlt}
            onClick={resetHandler}
          >
            Reset
          </button>
          <button type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default InvestmentInput;
