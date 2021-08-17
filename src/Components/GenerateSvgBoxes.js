import React from "react";
import PropTypes from "prop-types";
import SvgBox from "./SvgBox";
import { generateColorSvg } from "../Utils/helper";

const GenerateSvgBoxes = ({ boxesNumber }) => {
  return (
    <div className="svg-container">
      <button className="btn btn-sort">Sort</button>
      <div>
        {generateColorSvg(boxesNumber).map(({ color, number }) => (
          <SvgBox color={color} number={number} />
        ))}
      </div>
    </div>
  );
};

GenerateSvgBoxes.propTypes = {
  boxesNumber: PropTypes.number.isRequired,
};

export default GenerateSvgBoxes;
