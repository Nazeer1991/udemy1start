import React, { useState } from "react";
import "./NewExpense.css";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //   const [enteredValue, setEnteredValue] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  //   const titleChangeHandler = (e) => {
  //     setEnteredValue((prevState) => {
  //       return {
  //         ...prevState,
  //         title: e.target.value,
  //       };
  //     });
  //   };
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  return (
    <form className="new-expense">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
