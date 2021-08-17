import React, { useState } from "react";
import PropTypes from "prop-types";
import SvgBox from "./SvgBox";
import { generateColorSvg } from "../Utils/helper";

const GenerateSvgBoxes = ({ boxesNumber }) => {
  const [sorted, setSorted] = useState(false);
  return (
    <div className="svg-container">
      <button className="btn btn-sort" onClick={() => setSorted(!sorted)}>
        Generate Sort Number
      </button>
      <div>
        {generateColorSvg(boxesNumber)
          .sort((c, n) => (sorted ? c.number - n.number : 0))
          .map(({ color, number }) => (
            <SvgBox key={Math.random()} color={color} number={number} />
          ))}
      </div>
    </div>
  );
};

GenerateSvgBoxes.propTypes = {
  boxesNumber: PropTypes.number.isRequired,
};

export default GenerateSvgBoxes;
