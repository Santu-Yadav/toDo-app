import RenderList from "./components/renderList";

const MainBody = ({
  dataArray,
  handleDelete,
  handleCheckboxChange,
  checkedIds,
  selectedColorChange,
  selectedColorBoxArray,
  handleClick,
  handleChange,
  input,
  filterByStatus,
}) => {
  return (
    <div className="upper-body">
      <input
        className="upper-body-input"
        placeholder="What needs to be done?"
        value={input.value || " "}
        onChange={handleChange}
      />
      <button className="addButton" onClick={handleClick}>
        submit
      </button>
      <RenderList
        dataArray={dataArray}
        handleDelete={handleDelete}
        handleCheckboxChange={handleCheckboxChange}
        checkedIds={checkedIds}
        selectedColorChange={selectedColorChange}
        selectedColorBoxArray={selectedColorBoxArray}
        filterByStatus={filterByStatus}
      />
    </div>
  );
};

export default MainBody;
