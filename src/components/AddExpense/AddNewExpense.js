import { useEffect } from "react";
import "./AddNewExpense.css";

const AddNewExpense = (props) => {
  const addExpenseHandler = () => {
    props.hideExpenseForm(false);
  };

  return (
    <div id="add-expense-bar">
      <button id="add-expense-btn" onClick={addExpenseHandler}>
        Add Expense
      </button>
    </div>
  );
};

export default AddNewExpense;
