import React, { useState } from "react";
import PropTypes from "prop-types";

const From = ({ setBoxesNumber }) => {
  const [number, setNumber] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setBoxesNumber(number);
  };
  const handleChange = (e) => {
    setNumber(e.target.value);
  };
  return (
    <div className="form">
      <h1>Choose a Number between -100 and 100</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="input-number"
          value={number}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Confirm
        </button>
      </form>
    </div>
  );
};

From.propTypes = {
  // Function setState to get input Number
  setBoxesNumber: PropTypes.func.isRequired,
};

export default From;
