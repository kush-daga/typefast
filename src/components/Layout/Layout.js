import React from "react";
import styled from "styled-components";
export default function Layout({ words, batch, setBatch }) {
  return (
    <Container>
      <WordList>{words.map((word) => word + " ")}</WordList>
      <Input>
        <input></input>
        <div>1:00</div>
        <button
          onClick={() => {
            setBatch((batch) => batch + 1);
          }}
        >
          Increment Batch
        </button>
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
`;
const Input = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: center;
`;
