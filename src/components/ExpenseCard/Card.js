import "./Card.css";

export default function Card({ id, deleteExpense, children }) {
  const cardOnClickHandler = () => {
    deleteExpense(id);
  };

  return (
    <div className="expense-item" onClick={cardOnClickHandler}>
      {children}
    </div>
  );
}
