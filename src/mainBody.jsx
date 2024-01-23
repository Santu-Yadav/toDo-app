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
  editTask,
}) => {
  return (
    <div className="upper-body">
      <input
        className="upper-body-input"
        placeholder="What is the task today?"
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
        editTask={editTask}
      />
    </div>
  );
};

export default MainBody;
