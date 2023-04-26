import React from "react";
import { useState } from "react";
import UserInput from "../UserInput/UserInput";
import "./UserData.css";

function UserData({ setData }) {
  const [age, setAge] = useState();
  const [worth, setWorth] = useState();
  const [salary, setSalary] = useState();
  const [ageError, setAgeError] = useState("");
  const [salaryError, setSalaryError] = useState("");
  const [expenses, setExpenses] = useState();
  const [rateOfReturn, setRateOfReturn] = useState();
  const currentYear = new Date().getFullYear();

  const handleSubmit = (event) => {
    event.preventDefault();
    let cleanWorth = cleanValue(worth);
    let cleanSalary = cleanValue(salary);
    let cleanExpenses = cleanValue(expenses);
    let cleanRateOfReturn = rateOfReturn;

    if (isNaN(age)) {
       age = 0
    } 

    if (age < 13 || age > 80) {
      setAgeError("Age must be between 13 and 80.");
    } else if (cleanSalary < 0) {
      setSalaryError("Salary must be greater than zero.");
    } else {
      const newData = [];
      let amount = cleanWorth;
      for (let i = 0; i < 80 - age; i++) {
        let returns = 1 + cleanRateOfReturn / 100;
        amount = amount * returns + (cleanSalary - cleanExpenses);
        newData.push({
          year: currentYear + i,
          netWorth: Math.round(amount),
          age: age + i,
        });
      }
      setData(newData);
    }
  };

  function cleanValue(value) {
    let cleanValue = value.replace(/[^0-9]/g, "");
    if (cleanValue.length === 0) {
      cleanValue = 0;
    }
    return cleanValue;
  }

  function cleanRateOfReturn(value) {
    value = value.toLocaleString();
    let negative = false;
    if (value[0] === "-") {
      negative = true;
      value = value.slice(1);
    }
    let cleanValue = value.replace(/[^0-9]/g, "");
    if (negative === false) {
      return cleanValue;
    } else {
      return -cleanValue;
    }
  }

  function formatCurrency(value) {
    const formattedValue = parseFloat(cleanValue(value)).toLocaleString(
      "en-US",
      {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
      }
    );
    return formattedValue;
  }

  return (
    <form onSubmit={handleSubmit}>
      <UserInput
        variableText={"Age"}
        variableSubText={"The age you are today."}
        variable={age}
        defaultVariable={24}
        setVariable={setAge}
        formatVariable={(e) => (parseInt(e))}
        error={ageError}
      ></UserInput>
      <UserInput
        variableText={"Net Worth"}
        variableSubText={"The current value of your assets minus your liabilities."}
        variable={worth}
        defaultVariable={"$100,000"}
        setVariable={setWorth}
        formatVariable={formatCurrency}
        error={salaryError}
      ></UserInput>
      <UserInput
        variableText={"Annual Salary"}
        variableSubText={"Your income after taxes."}
        variable={salary}
        defaultVariable={"$60,000"}
        setVariable={setSalary}
        formatVariable={formatCurrency}
      ></UserInput>
      <UserInput
        variableText={"Annual Expenses"}
        variableSubText={"Your current cost-of-living."}
        variable={expenses}
        defaultVariable={"$30,000"}
        setVariable={setExpenses}
        formatVariable={formatCurrency}
      ></UserInput>
      <UserInput
        variableText={"Rate of return"}
        variableSubText={"Subtract inflation from your rate of return."}
        variable={rateOfReturn}
        defaultVariable={"4"}
        setVariable={setRateOfReturn}
        formatVariable={cleanRateOfReturn}
      ></UserInput>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserData;
