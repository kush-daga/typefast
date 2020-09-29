import React from "react";
import Layout from "./components/Layout";
import useKeyPressed from "./hooks/useKeyPressed";
import generate from "./helpers/generateWords";
function App() {
  // const [keyPressed, spacePressed] = useKeyPressed((key) => {
  //   console.log(key);
  // });
  const words = generate();
  return (
    <div>
      Word List{" "}
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
