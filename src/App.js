import React, { useState } from "react";
import Header from "./components/Header/Header.js";
import InvestmentInput from "./components/InvestmentInput/InvestmentInput.js";
import ResultList from "./components/ResultList/ResultList.js";

function App() {
  // const [resultData, setResultData] = useState(null);
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    setUserInput(userInput);

    console.log(yearlyData);
    // do something with yearlyData ...
  };

  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = +userInput["currentSavings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearlyContribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <InvestmentInput onCalculate={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {!userInput && (
        <p style={{ textAlign: "center" }}>No investment calculated yet.</p>
      )}
      {userInput && (
        <ResultList
          items={yearlyData}
          initialInvestment={userInput["currentSavings"]}
        />
      )}
    </div>
  );
}

export default App;
