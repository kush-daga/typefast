import React from "react";
import useKeyPressed from "./hooks/useKeyPressed";

function App() {
  const [keyPressed, spacePressed] = useKeyPressed((key) => {
    console.log(key);
  });

  return (
    <div>
      Word List{" "}
      <p>
        <br />
        Key: {keyPressed} <br />
        Space: {spacePressed.toString()}
      </p>
    </div>
  );
}

export default App;
