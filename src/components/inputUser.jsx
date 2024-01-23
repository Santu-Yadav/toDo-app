const InputUser = ({ input, handleChange, handleClick }) => {
  return (
    <div>
      <input
        className="upper-body-input"
        placeholder="What is the task today?"
        value={input.value || " "}
        onChange={handleChange}
      />
      <button className="addButton" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default InputUser;
