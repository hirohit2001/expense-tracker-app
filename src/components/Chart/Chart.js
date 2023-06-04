import "./Chart.css";
import ChartBar from "../ChartBar/ChartBar";

const Chart = ({ expenses }) => {
  const dataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  let maxValue = 0;
  expenses.forEach((expense) => {
    const price = parseFloat(expense.price);
    const date = expense.date;
    dataPoints[date.getMonth()].value += price;
    maxValue = Math.max(maxValue, dataPoints[date.getMonth()].value);
  });

  return (
    <div id="chart">
      {dataPoints.map((point) => {
        return <ChartBar key={point.label} point={point} maxValue={maxValue} />;
      })}
    </div>
  );
};

export default Chart;
