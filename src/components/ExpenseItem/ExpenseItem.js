import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  const { date, title, price } = props;
  const day = date.toLocaleString("en-US", { day: "numeric" });
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.toLocaleString("en-US", { year: "numeric" });

  return (
    <>
      <div className="expense-date">
        <div className="expense-month">{month}</div>
        <div className="expense-year">{year}</div>
        <div className="expense-day">{day}</div>
      </div>
      <div className="item-description">
        <div className="item-name">{title}</div>
        <div className="item-price">$ {price}</div>
      </div>
    </>
  );
}
