import React from "react";
import Layout from "./components/Layout";
import generate from "./helpers/generateWords";
function App() {
  const words = generate();
  return (
    <div>
      <h1 align="center">TYPE FAST</h1>
      {/* <p>
        <br />
        Key: {keyPressed} <br />
        Space: {spacePressed.toString()}
      </p> */}
      <Layout words={words} />
    </div>
  );
}

export default App;
