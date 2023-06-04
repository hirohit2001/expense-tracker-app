import "./NewExpenseForm.css";

import { useState } from "react";

const NewExpenseForm = (props) => {
  const [inputValues, setInputValues] = useState({
    title: "",
    price: "",
    date: "",
  });

  const inputValuesChangeHandler = (event) => {
    setInputValues((prevInputValues) => {
      return { ...prevInputValues, [event.target.name]: event.target.value };
    });
  };

  const cancelBtnHandler = (event) => {
    event.preventDefault();
    props.hideExpenseForm(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = { ...inputValues, date: new Date(inputValues.date) };
    props.addNewExpense(expenseData);
    props.hideExpenseForm(true);
    setInputValues({ title: "", price: "", date: "" });
  };

  return (
    <div id="backdrop">
      <form onSubmit={submitHandler} id="expense-form">
        <div id="title">Add New Expense</div>
        <div className="form-control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={inputValues.title}
            onChange={inputValuesChangeHandler}
          />
        </div>
        <div className="form-control">
          <label>Price</label>
          <input
            type="number"
            name="price"
            step="0.01"
            min="0.01"
            value={inputValues.price}
            onChange={inputValuesChangeHandler}
          />
        </div>
        <div className="form-control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={inputValues.date}
            onChange={inputValuesChangeHandler}
          />
        </div>
        <div className="form-control">
          <button id="cancel-btn" onClick={cancelBtnHandler}>
            Cancel
          </button>
          <button type="submit" id="submit-btn">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewExpenseForm;
