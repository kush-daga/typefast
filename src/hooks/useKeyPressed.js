import { useState, useEffect } from "react";

const useKeyPressed = (callback) => {
  const [keyPressed, setKeyPressed] = useState();
  const [spacePressed, setSpacePressed] = useState(false);
  useEffect(() => {
    const keyPressedDown = ({ key, keyCode }) => {
      if (keyPressed !== key && key.length === 1) {
        setSpacePressed(false);
        setKeyPressed(key);
        callback && callback(key);
      }
      if (keyPressed !== key && key === " ") {
        console.log("Hello");
        setSpacePressed(true);
      }
    };

    const keyPressedUp = () => {
      setKeyPressed(null);
      setSpacePressed(false);
    };

    window.addEventListener("keydown", keyPressedDown);
    window.addEventListener("keyup", keyPressedUp);

    return () => {
      window.removeEventListener("keydown", keyPressedDown);
      window.removeEventListener("keyup", keyPressedUp);
    };
  });

  return [keyPressed, spacePressed];
};

export default useKeyPressed;
