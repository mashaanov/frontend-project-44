import { game } from '../gameTemplate.js';
import getRandomIntInclusive from '../random-function.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (number) => (number % 2 === 0);

const getAnswerAndQuestion = () => {
  const question = getRandomIntInclusive(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [answer, question];
};

export default () => game(description, getAnswerAndQuestion);
