const InputUser = ({ input, handleChange, handleClick }) => {
  return (
    <div>
      <input
        className="upper-body-input"
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
