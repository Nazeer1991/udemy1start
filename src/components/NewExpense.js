import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  const savedExpense = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSave={savedExpense} />
    </div>
  );
};

export default NewExpense;
