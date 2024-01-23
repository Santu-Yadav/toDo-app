import { useState } from "react";

import MainBody from "./mainBody";
import Footer from "./footer";

import "./app.css";

function App() {
  const [input, setInput] = useState({});
  const [dataArray, setDataArray] = useState([]);
  const [checkedIds, setCheckedIds] = useState([]);
  const [selectedColorBoxArray, setSelectedColorBoxArray] = useState([]);
  const [filterByStatus, setFilterByStatus] = useState("all");
  const [editTaskArray, setEditTaskArray] = useState([]);

  const handleChange = (e) => {
    const uniqueIdentifier = `${Date.now()}_${Math.random()}`;
    // console.log(uniqueIdentifier);
    // console.log("input #", e.target.value);
    setInput({
      id: uniqueIdentifier,
      value: e.target.value,
      color: "no color",
    });
  };

  // console.log("dataArray #", dataArray);

  const handleClick = (e) => {
    e.preventDefault();
    setDataArray((prev) => [...prev, input]);
    setInput({});
  };

  const handleDelete = (data) => {
    // console.log("Delete clicked #", data);
    const filteredDataArray = dataArray.filter((item) => item.id !== data.id);
    setDataArray(filteredDataArray);
  };

  const handleClearCompleted = () => {
    const remaningData = dataArray.filter(
      (item) => !checkedIds.includes(item.id)
    );

    setDataArray(remaningData);
  };

  const handleMarkAllCompleted = () => {
    const arr2 = dataArray.map((item) => item.id);
    setCheckedIds(arr2);
  };

  const handleCheckboxChange = (event) => {
    const selectedId = event.target.id;

    setCheckedIds((prevIds) =>
      event.target.checked
        ? [...prevIds, selectedId]
        : prevIds.filter((id) => id !== selectedId)
    );
  };

  const selectedColorChange = (event, item) => {
    setDataArray(
      dataArray.map((element) =>
        element.id === item.id
          ? { ...element, color: event.target.value }
          : { ...element }
      )
    );
  };

  const boxSelected = (e) => {
    console.log("Green box selected", e);

    setSelectedColorBoxArray((prev) =>
      e.target.checked
        ? [...prev, e.target.value]
        : prev.filter((item) => item !== e.target.value)
    );
    console.log("selectedColorBoxArray", selectedColorBoxArray);
  };

  const editTask = (item) => {
    console.log("edit rask onClick #", item);
    setEditTaskArray((prev) => [...prev, item.id]);

    /* data array holds array of objects. I need to edit the value of the matching id. */
    /* const filteredElement = dataArray.find(
      (eachElement) => eachElement.id === item.id
    );
    console.log("filteredElement #", filteredElement);

    const restElement = dataArray.filter(
      (eachElement) => eachElement.id !== item.id
    );

     setDataArray([...restElement, {...filteredElement,value:}]) */
  };

  return (
    <div className="appContainer">
      <header className="header">useState Fundamentals Example</header>
      <div className="body">
        <p className="body-p">Todos</p>
        <div className="body-dashboard">
          <MainBody
            dataArray={dataArray}
            handleDelete={handleDelete}
            handleCheckboxChange={handleCheckboxChange}
            checkedIds={checkedIds}
            selectedColorChange={selectedColorChange}
            selectedColorBoxArray={selectedColorBoxArray}
            handleClick={handleClick}
            handleChange={handleChange}
            input={input}
            filterByStatus={filterByStatus}
            editTaskArray={editTaskArray}
            editTask={editTask}
          />

          <Footer
            boxSelected={boxSelected}
            handleMarkAllCompleted={handleMarkAllCompleted}
            handleClearCompleted={handleClearCompleted}
            setFilterByStatus={setFilterByStatus}
            dataArray={dataArray}
            checkedIds={checkedIds}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
