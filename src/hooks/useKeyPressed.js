import { useState, useEffect } from "react";

const useKeyPressed = (callback) => {
  const [keyPressed, setKeyPressed] = useState();
  const [spacePressed, setSpacePressed] = useState(false);
  const [backspacePressed, setBackspacePressed] = useState(false);

  useEffect(() => {
    const keyPressedDown = ({ key, keyCode }) => {
      //   console.log("render");
      //   console.log(key, keyCode);
      if (keyPressed !== key && keyCode === 8) {
        setBackspacePressed(true);
      }
      if (keyPressed !== key && key === " ") {
        //   console.log("Hello");
        setSpacePressed(true);
      }

      if (keyPressed !== key && key.length === 1) {
        setSpacePressed(false);
        setBackspacePressed(false);
        setKeyPressed(key);
        callback && callback(key);
      }
    };

    const keyPressedUp = () => {
      setKeyPressed(null);
      setSpacePressed(false);
      setBackspacePressed(false);
    };

    window.addEventListener("keydown", keyPressedDown);
    window.addEventListener("keyup", keyPressedUp);

    return () => {
      window.removeEventListener("keydown", keyPressedDown);
      window.removeEventListener("keyup", keyPressedUp);
    };
  });

  return [keyPressed, spacePressed, backspacePressed];
};

export default useKeyPressed;
