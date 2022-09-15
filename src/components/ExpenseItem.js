import React, { useState } from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({ title, amount, date }) {
  const [value, setValue] = useState(title);
  const changeTitle = () => {
    console.log("Clicked");
    if (value === "Toilet Paper") {
      setValue("newspaper");
    } else {
      setValue("Toilet Paper");
    }
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{value}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={changeTitle}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
