import React, { useState } from "react";
import '@grapecity/wijmo.styles/wijmo.css';
import Form from "./Components/From";
import GenerateSvgBoxes from "./Components/GenerateSvgBoxes";
import "./App.css";

function App() {
  const [boxesNumber, setBoxesNumber] = useState(100);
  return (
    <div className="App">
      <Form setBoxesNumber={setBoxesNumber} />
      <GenerateSvgBoxes boxesNumber={boxesNumber} />
    </div>
  );
}

export default App;
