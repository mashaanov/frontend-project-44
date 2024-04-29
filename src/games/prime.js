import { game } from ''../gameTemplate.js';

function getRandomIntInclusive(min, max) {
  let minValue = min;
  let maxValue = max;
  minValue = Math.ceil(min);
  maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue); 
  // максимум и минимум включаются
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let result = 'yes';

  if (number <= 1) {
    result = 'no';
  } else {
    for (let divider = 2; divider < Math.sqrt(number) + 1; divider += 1) {
      if (number % divider === 0) {
        result = 'no';
      }
    };
  }
  return result;
};

const getAnswerAndQuestion = () => {
  const question = getRandomIntInclusive(0, 100);
  const answer = isPrime(question);
  return [answer, question];
};

export default () => game(description, getAnswerAndQuestion);
