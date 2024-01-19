import "./renderList.css";

const RenderList = ({
  dataArray,
  handleDelete,
  handleCheckboxChange,
  checkedIds,
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
        }

        /* if (condition) {
1. like above if check the selected radio button. 
2. if it is all - don't do anything.
3. active, then cross verify with checked array. All only allow row to be painted which is not available in the checked array.
4. completed, then allow rows which is available in the checked array


        } */

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
