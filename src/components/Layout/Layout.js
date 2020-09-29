import React, { useEffect, useState } from "react";
import styled from "styled-components";
export default function Layout({
  words,
  batch,
  setBatch,
  keyPressed,
  spacePressed,
  backspacePressed,
  timeRemaining,
}) {
  // States
  const [wordWritten, setWordWritten] = useState("");
  const [wordsTraversed, setWordsTraversed] = useState(0);
  const [totalWordsTraversed, setTotalWordsTraversed] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [timeOver, setTimeOver] = useState(false);
  const [accuracy, setAccuracy] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [wrongWords, setWrongWords] = useState(0);

  const calculateWpm = () => {
    setWpm((totalWordsTraversed - wrongWords).toFixed(2));
    setAccuracy(
      ((totalWordsTraversed - wrongWords) / totalWordsTraversed) * 100
    );
  };

  useEffect(() => {
    if (spacePressed) {
      console.log(
        wordWritten.trim(),
        words[currentWordIndex],
        wordWritten.trim() === words[currentWordIndex]
      );
      if (!(wordWritten.trim() === words[currentWordIndex])) {
        console.log("WRONG");
        setWrongWords((wrongWords) => wrongWords + 1);
      }

      setWordWritten("");

      setCurrentWordIndex((currentWordIndex) => currentWordIndex + 1);
      //   console.log("Space");

      setWordsTraversed((wordsTraversed) => {
        // console.log("EHEHEHE", wordsTraversed);
        return wordsTraversed + 1;
      });

      setTotalWordsTraversed((totalWordsTraversed) => {
        // console.log("EHEHEHE", wordsTraversed);
        return totalWordsTraversed + 1;
      });
    }

    if (backspacePressed) {
      console.log("Press");
      setWordWritten((wordWritten) => wordWritten.slice(0, -1));
    }

    if (keyPressed) {
      if (!spacePressed) {
        console.log("sags");
        setWordWritten((wordWritten) => wordWritten + keyPressed);
      }
    }
  }, [keyPressed, spacePressed, backspacePressed]);

  useEffect(() => {
    // console.log(wordsTraversed, currentWordIndex);
    if (wordsTraversed === 20) {
      setCurrentWordIndex(0);
      setBatch((batch) => {
        return batch + 1;
      });
      setWordsTraversed(0);
    }
  }, [wordsTraversed]);

  useEffect(() => {
    if (!timeRemaining) {
      setTimeOver(true);
      calculateWpm();
      setTotalWordsTraversed(0);
    }
  }, [timeRemaining]);

  return (
    <Container>
      <WordList>
        <p
          style={{
            fontSize: "20px",
            wordSpacing: "2px",
          }}
        >
          {words.map((word, index) => {
            if (index === currentWordIndex) {
              return (
                <span>
                  <span style={{ textDecoration: "underline" }}>{word}</span>{" "}
                </span>
              );
            }
            return <span>{word + " "}</span>;
          })}
        </p>
      </WordList>
      <Input>
        <input value={wordWritten}></input>
        <Timer>{timeRemaining}</Timer>
        {timeOver ? <p>WPM - {wpm}</p> : ""}
        {timeOver ? <p>Accuracy - {accuracy}%</p> : ""}
      </Input>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f3f3f3;
  min-height: 50vh;
  width: 90%;
  margin: auto;
`;
const WordList = styled.div`
  display: flex;
  background: white;
  height: 100px;
  width: 90%;
  margin: auto;
  padding: 20px;
`;
const Input = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: center;
`;
const Timer = styled.div`
  background: black;
  padding: 5px 10px;
  margin-left: 10px;
  color: white;
`;
