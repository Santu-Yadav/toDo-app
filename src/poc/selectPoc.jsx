import React from "react";
import "./selectPoc.css";

const CustomSelect = () => {
  return (
    <div className="custom-select">
      <select>
        <option value="">Open this select menu</option>
        <option value="GitHub">GitHub</option>
        <option value="Instagram">Instagram</option>
        <option value="Facebook">Facebook</option>
        <option value="LinkedIn">LinkedIn</option>
        <option value="Twitter">Twitter</option>
        <option value="Reddit">Reddit</option>
      </select>
    </div>
  );
};

export default CustomSelect;
