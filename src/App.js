import React, { useState } from "react";
import Form from "./Components/From";
import "./App.css";

function App() {
  const [boxesNumber, setBoxesNumber] = useState(0);
  return (
    <div className="App">
      <Form setBoxesNumber={setBoxesNumber} />
      <h1>{boxesNumber}</h1>
      
    </div>
  );
}

export default App;
