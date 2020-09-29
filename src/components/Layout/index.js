import React, { useState, useEffect } from "react";
import useKeyPressed from "../../hooks/useKeyPressed";

import Layout from "./Layout";

export default function LayoutIndex({ words }) {
  const [batch, setBatch] = useState(0);
  const [currentWords, setCurrentWords] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [startTime, setStartTime] = useState();
  const [wpm, setWpm] = useState(0);
  const currentTime = () => new Date().getTime();
  const [keyPressed, spacePressed, backspacePressed] = useKeyPressed();
  const [firstTime, setFirstTime] = useState(1);

  useEffect(() => {
    if (firstTime && keyPressed) {
      setFirstTime(0);
      var seconds = 60;
      const tick = () => {
        if (seconds === 0) return;
        seconds--;
        setTimeRemaining((timeRemaining) => timeRemaining - 1);
        console.log(seconds);
        setTimeout(tick, 1000);
      };
      tick();
    } else return;
  }, [keyPressed]);

  useEffect(() => {
    const newWords = words.slice(batch, batch + 20);
    setCurrentWords(newWords);
  }, [batch]);

  return (
    <div>
      <Layout
        words={currentWords}
        batch={batch}
        setBatch={setBatch}
        keyPressed={keyPressed}
        spacePressed={spacePressed}
        backspacePressed={backspacePressed}
        timeRemaining={timeRemaining}
      />
    </div>
  );
}
