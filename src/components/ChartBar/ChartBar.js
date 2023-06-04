import "./ChartBar.css";

const ChartBar = ({ point, maxValue }) => {
  const height = maxValue ? `${(point.value / maxValue) * 100}%` : "0%";

  return (
    <div id="chart-bar">
      <div id="bar">
        <div id="inner-bar" style={{ height }}></div>
      </div>
      <div id="label">{point.label}</div>
    </div>
  );
};

export default ChartBar;
