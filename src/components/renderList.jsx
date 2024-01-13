import "./renderList.css";

const RenderList = ({
  dataArray,
  handleDelete,
  handleCheckboxChange,
  checkedIds,
  // selectedColor,
  // setSelectedColor,
  selectedColorChange,
  selectedColorBoxArray,
}) => {
  return (
    <div>
      {dataArray.map((item) => {
        if (
          selectedColorBoxArray.length !== 0 &&
          !selectedColorBoxArray.includes(item.color)
        ) {
          return;
        } else {
          return (
            <div className="render-list-container" key={item.id}>
              <input
                id={item.id}
                className="input-checkbox"
                type="checkbox"
                onChange={handleCheckboxChange}
                checked={checkedIds.includes(item.id)}
              />
              <div className="item-task">{item.value}</div>
              <div>
                <div className="selectWrapper">
                  <select
                    value={item.color}
                    onChange={(event) => selectedColorChange(event, item)}
                    className="selectClass"
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
              <button onClick={() => handleDelete(item)}>Delete</button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default RenderList;
