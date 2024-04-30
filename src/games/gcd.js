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
  let num1 = number1;
  let num2 = number2;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return (num1); 
};

const getAnswerAndQuestion = () => {
  const number1 = getRandomIntInclusive(0, 100);
  const number2 = getRandomIntInclusive(0, 100);
  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2);
  
  return [answer, question];
};

export default () => game(description, getAnswerAndQuestion);