import React from "react";
import PropTypes from "prop-types";
import SvgBox from "./SvgBox";

const GenerateSvgBoxes = ({ generatedBoxesSvg, sorted }) => {
  return (
    <div className="svg-container">
      <div>
        {generatedBoxesSvg
          .sort(({ number: a }, { number: b }) => (sorted ? a - b : 0))
          .map(({ color, number }) => (
            <SvgBox key={Math.random()} color={color} number={number} />
          ))}
      </div>
    </div>
  );
};

GenerateSvgBoxes.propTypes = {
  generatedBoxesSvg: PropTypes.array.isRequired,
  sorted: PropTypes.bool.isRequired,
};

export default GenerateSvgBoxes;
