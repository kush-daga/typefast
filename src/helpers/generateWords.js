import Faker from "faker";

const generate = () => {
  const wordList = [];
  for (let i = 0; i < 500; i++) {
    wordList.push(Faker.random.word());
  }
  return wordList;
};

export default generate;
