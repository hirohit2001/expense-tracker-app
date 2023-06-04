import { useState } from "react";
import "./App.css";
import AddNewExpense from "./components/AddExpense/AddNewExpense";
import Card from "./components/ExpenseCard/Card";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import NewExpenseForm from "./components/ExpenseForm/NewExpenseForm";
import Filter from "./components/FilterBox/Filter";
import Chart from "./components/Chart/Chart";
import data from "./data";

const App = () => {
  const [expenses, updateExpenses] = useState([...data]);
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const deleteExpense = (id) => {
    updateExpenses((prevExpenses) => {
      return [...prevExpenses.filter((expense) => expense.id !== id)];
    });
  };

  const addNewExpense = (expenseData) => {
    updateExpenses((prevExpenses) => {
      return [...prevExpenses, { ...expenseData, id: Date.now().toString(36) }];
    });
  };

  const updateSelectedYear = (year) => {
    setSelectedYear(parseInt(year));
  };

  const hideExpenseForm = (value) => {
    setShowExpenseForm(!value);
  };

  const filteredExpenses = expenses.filter((expense) => {
    const expenseYear = expense.date.getFullYear();
    return expenseYear === selectedYear;
  });

  let expenseList = filteredExpenses.map(({ id, date, title, price }) => (
    <Card key={id} id={id} deleteExpense={deleteExpense}>
      <ExpenseItem date={date} title={title} price={price} />
    </Card>
  ));

  if (expenseList.length === 0) {
    expenseList = <div id="message">No expenses found!</div>;
  }

  return (
    <div id="container">
      {!showExpenseForm && <AddNewExpense hideExpenseForm={hideExpenseForm} />}
      {showExpenseForm && (
        <NewExpenseForm
          hideExpenseForm={hideExpenseForm}
          addNewExpense={addNewExpense}
        />
      )}
      <div id="main-container">
        <Filter
          updateSelectedYear={updateSelectedYear}
          selectedYear={selectedYear}
        />
        <Chart expenses={filteredExpenses} />
        {expenseList}
      </div>
    </div>
  );
};

export default App;
