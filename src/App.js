import React, { useState } from "react";
import Header from "./components/Header/Header.js";
import InvestmentInput from "./components/InvestmentInput/InvestmentInput.js";
import ResultList from "./components/ResultList/ResultList.js";

function App() {
  const [resultData, setResultData] = useState("");

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    const yearlyData = []; // per-year results
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    let totalInterest = 0;
    let investedCapital = 0;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      investedCapital = currentSavings - totalInterest;

      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        id: Math.random().toString(),
        year: i + 1,
        yearlyInterest: formatter.format(yearlyInterest),
        savingsEndOfYear: formatter.format(currentSavings),
        yearlyContribution: formatter.format(yearlyContribution),
        totalInterest: formatter.format(totalInterest),
        investedCapital: formatter.format(investedCapital),
      });
    }

    console.log(yearlyData);
    // do something with yearlyData ...
    setResultData(yearlyData);
  };

  let content = (
    <p style={{ textAlign: "center" }}>No investment calculated yet.</p>
  );
  if (resultData.length > 0) {
    content = <ResultList items={resultData} />;
  }

  return (
    <div>
      <Header />
      <InvestmentInput onCalculate={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {content}
    </div>
  );
}

export default App;
