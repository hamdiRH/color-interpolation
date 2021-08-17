import React, { useState } from "react";
import Form from "./Components/From";
import GenerateSvgBoxes from "./Components/GenerateSvgBoxes";
import { generateRandomNumber } from "./Utils/helper";
import "./App.css";

function App() {
  const [boxesNumber, setBoxesNumber] = useState(0);
  console.table(generateRandomNumber(500))
  return (
    <div className="App">
      <Form setBoxesNumber={setBoxesNumber} />
      <GenerateSvgBoxes boxesNumber={boxesNumber} />
    </div>
  );
}

export default App;
