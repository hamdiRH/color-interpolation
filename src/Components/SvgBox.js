import React from "react";
import PropTypes from "prop-types";

const SvgBox = ({ color, number }) => {
    console.log(color)
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

SvgBox.propTypes = {};

export default SvgBox;
