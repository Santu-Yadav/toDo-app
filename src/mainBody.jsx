import InputUser from "./components/inputUser";
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
  editTaskArray,
  editTask,
  editTaskIndicator,
  setEditTaskIndicator,
}) => {
  return (
    <div className="upper-body">
      <InputUser
        input={input}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <RenderList
        input={input}
        dataArray={dataArray}
        handleDelete={handleDelete}
        handleCheckboxChange={handleCheckboxChange}
        checkedIds={checkedIds}
        selectedColorChange={selectedColorChange}
        selectedColorBoxArray={selectedColorBoxArray}
        filterByStatus={filterByStatus}
        editTaskArray={editTaskArray}
        handleChange={handleChange}
        handleClick={handleClick}
        editTask={editTask}
        editTaskIndicator={editTaskIndicator}
        setEditTaskIndicator={setEditTaskIndicator}
      />
    </div>
  );
};

export default MainBody;
