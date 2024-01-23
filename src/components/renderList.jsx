import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const RenderList = ({
  dataArray,
  handleDelete,
  handleCheckboxChange,
  checkedIds,
  selectedColorChange,
  selectedColorBoxArray,
  filterByStatus,
  editTask,
}) => {
  return (
    <div>
      {dataArray.map((item) => {
        if (
          selectedColorBoxArray.length !== 0 &&
          !selectedColorBoxArray.includes(item.color)
        )
          return;

        if (filterByStatus === "completed" && !checkedIds.includes(item.id))
          return;

        if (filterByStatus === "active" && checkedIds.includes(item.id)) return;

        {
          return (
            <div className="render-list-container" key={item.id}>
              <label className="input-container">
                <input
                  className="input-checkbox"
                  id={item.id}
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  checked={checkedIds.includes(item.id)}
                />
                <span className="checkMark"></span>
              </label>
              <div className="item-task">{item.value}</div>
              <div>
                <div className="selectWrapper">
                  <select
                    value={item.color}
                    onChange={(event) => selectedColorChange(event, item)}
                    className="selectClass"
                    style={{ color: item.color }}
                  >
                    <option value="selectColor">Select color:</option>
                    <option
                      value="green"
                      style={{
                        color: "green",
                        fontWeight: "bold",
                      }}
                    >
                      Green
                    </option>
                    <option
                      value="red"
                      style={{ color: "red", fontWeight: "bold" }}
                    >
                      Red
                    </option>
                    <option
                      value="blue"
                      style={{ color: "blue", fontWeight: "bold" }}
                    >
                      Blue
                    </option>
                    <option
                      value="orange"
                      style={{ color: "orange", fontWeight: "bold" }}
                    >
                      Orange
                    </option>
                    <option
                      value="purple"
                      style={{ color: "purple", fontWeight: "bold" }}
                    >
                      Purple
                    </option>
                  </select>
                </div>
              </div>
              <FontAwesomeIcon
                icon={faPenToSquare}
                onClick={() => editTask(item)}
              />
              <button onClick={() => handleDelete(item)}>Delete</button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default RenderList;
