import React, { useState } from "react";
import PropTypes from "prop-types";

const From = ({ setBoxesNumber, setSorted }) => {
  const [number, setNumber] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    number <= 0 ? setError("Number must be Positive") : setBoxesNumber(number);
  };

  const handleChange = (e) => {
    setError("");
    setNumber(e.target.value);
  };

  return (
    <div className="form">
      <h1>Choose a Number </h1>
      {error && <h1 className="error">{error}</h1>}
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
        <button className="btn btn-sort" onClick={setSorted}>
          Sort
        </button>
      </form>
    </div>
  );
};

From.propTypes = {
  setBoxesNumber: PropTypes.func.isRequired,
  setSorted: PropTypes.func.isRequired,
};

export default From;
