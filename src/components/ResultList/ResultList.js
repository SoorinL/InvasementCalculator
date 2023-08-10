import React from "react";
import ResultItem from "../ResultItem/ResultItem";
import styles from "./ResultList.module.css";

const ResultList = (props) => {
  console.log("ResultList안:", props);

  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((resultData) => (
          <ResultItem
            key={resultData.id}
            year={resultData.year}
            totalSavings={resultData.savingsEndOfYear}
            interest={resultData.yearlyInterest}
            totalInterest={resultData.totalInterest}
            investedCapital={resultData.investedCapital}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ResultList;
