import { game } from '../gameTemplate.js';

function getRandomIntInclusive(min, max) {
  let minValue = min;
  let maxValue = max;
  minValue = Math.ceil(min);
  maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
  // максимум и минимум включаются
}

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  while (number1 !== number2) {
    if (number1 > number2) {
      number1 -= number2;
    } else {
      number2 -= number1;
    }
  }
  return (number1); 
};

const getAnswerAndQuestion = () => {
  const number1 = getRandomIntInclusive(0, 100);
  const number2 = getRandomIntInclusive(0, 100);
  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2);
  
  return [answer, question];
};

export default () => game(description, getAnswerAndQuestion);