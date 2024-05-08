import { game } from '../gameTemplate.js';
import getRandomIntInclusive from '../random-function.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let result = true;

  if (number <= 1) {
    result = false;
  } else {
    for (let divider = 2; divider < Math.sqrt(number) + 1; divider += 1) {
      if (number % divider === 0) {
        result = false;
      }
    }
  }
  return result;
};

const getAnswerAndQuestion = () => {
  const question = getRandomIntInclusive(0, 100);
  const answer = isPrime(question) ? "yes": "no"
  return [answer, question];
};

export default () => game(description, getAnswerAndQuestion);
