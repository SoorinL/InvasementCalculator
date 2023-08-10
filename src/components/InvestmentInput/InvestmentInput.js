import React, { useState } from "react";
import styles from "./InvestmentInput.module.css";

const initialUserInput = {
  currentSavings: 10000,
  yearlyContribution: 1200,
  expectedReturn: 7,
  duration: 10,
};

const InvestmentInput = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onCalculate(userInput);
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
                inputChangeHandler("currentSavings", event.target.value);
              }}
              value={userInput["currentSavings"]}
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
              value={userInput["yearlyContribution"]}
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
              value={userInput["expectedReturn"]}
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
              value={userInput["duration"]}
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
