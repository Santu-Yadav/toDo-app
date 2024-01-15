import FilterByColor from "./components/filterByColor";

const Footer = ({
  boxSelected,
  handleMarkAllCompleted,
  handleClearCompleted,
}) => {
  return (
    <div className="footer">
      <div className="box">
        <span>Actions</span>
        <button className="actionsButton" onClick={handleMarkAllCompleted}>
          Mark All Completed
        </button>
        <button className="actionsButton" onClick={handleClearCompleted}>
          Clear completed
        </button>
      </div>
      <div className="box2">
        <span>Remaining Todos</span>
      </div>
      <div className="box3">
        <span>Filter by Status</span>
        <button className="statusButton">All</button>
        <button className="statusButton">Active</button>
        <button className="statusButton">Completed</button>
      </div>
      <div className="box4">
        <span>Filter by Color</span>
        <FilterByColor boxSelected={boxSelected} />
      </div>
    </div>
  );
};

export default Footer;
