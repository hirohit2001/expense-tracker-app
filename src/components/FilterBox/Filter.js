import "./Filter.css";

const Filter = (props) => {
  const { selectedYear, updateSelectedYear } = props;

  const filterHandler = (event) => {
    updateSelectedYear(event.target.value);
  };

  return (
    <div id="filter-box">
      <div id="filter-header">Filter by year</div>
      <div id="selector">
        <select onChange={filterHandler} value={selectedYear}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
