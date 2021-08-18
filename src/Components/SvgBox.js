import React from "react";
import PropTypes from "prop-types";

const SvgBox = ({ color, number }) => {
  return (
    <svg
      height="30"
      width="30"
      style={{
        background: color,
        margin: "1px",
        textAlign: "center",
        borderRadius: "5px",
      }}
    >
      <text
        x="50%"
        y="50%"
        fill="white"
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {number}
      </text>
    </svg>
  );
};

SvgBox.propTypes = {
  color: PropTypes.any.isRequired,
  number: PropTypes.number.isRequired,
};

export default SvgBox;
