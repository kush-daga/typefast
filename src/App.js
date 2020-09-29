import React, { useEffect } from "react";

import Faker from "faker";

function App() {
  const wordList = [];
  useEffect(() => {
    for (let i = 0; i < 500; i++) {
      wordList.push(Faker.random.word());
    }
    console.log(wordList);
  }, []);
  return <div>Word List</div>;
}

export default App;
