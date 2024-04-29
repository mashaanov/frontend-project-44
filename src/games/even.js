import { game } from "../gameTemplate.js";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // максимум и минимум включаются
};

const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (number) => (number % 2 === 0 ? "yes" : "no");

const getAnswerAndQuestion = () => {
  const question = getRandomIntInclusive(0, 100);
  const answer = isEven(question);
  return [answer, question];
};

export default () => game(description, getAnswerAndQuestion);
