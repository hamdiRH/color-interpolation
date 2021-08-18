import React, { useState, useRef, useEffect, memo } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import "@grapecity/wijmo.styles/wijmo.css";
import Form from "./Components/Form";
import { generateColorSvg } from "./Utils/helper";
import GenerateSvgBoxes from "./Components/GenerateSvgBoxes";
import "./App.css";

function App() {
  
  const GenerateSvgBoxesComponent = useRef();

  const [boxesNumber, setBoxesNumber] = useState(0);
  const [generatedBoxesSvg, setGeneratedBoxesSvg] = useState([]);
  const [sorted, setSorted] = useState(false);

  const toggleSort = () => setSorted(!sorted);

  useEffect(() => {
    setGeneratedBoxesSvg(generateColorSvg(boxesNumber));
  }, [boxesNumber]);

  return (
    <div className="App">
      <Form setBoxesNumber={setBoxesNumber} setSorted={toggleSort} />
      <div ref={GenerateSvgBoxesComponent}>
        <GenerateSvgBoxes
          generatedBoxesSvg={generatedBoxesSvg}
          sorted={sorted}
        />
      </div>
      {boxesNumber > 0 && (
        <button
          onClick={() => exportComponentAsPNG(GenerateSvgBoxesComponent)}
          className="btn btn-export"
        >
          Export As PNG
        </button>
      )}
    </div>
  );
}

export default memo(App);
