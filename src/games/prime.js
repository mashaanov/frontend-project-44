import { game } from "../gameTemplate.js";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // максимум и минимум включаются
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';


const isPrime = (number) => {
  let result = 'yes';

  if (number <= 1) {
    result = 'no';
  } else {
    for (let divider = 2; divider < Math.sqrt(number) + 1; divider += 1) {
      if (number % divider === 0) {
        result = 'no';
        break;
      } 
    };
  }; 
  return result;
};

const getAnswerAndQuestion = () => {
  const question = getRandomIntInclusive(0,100);
  const answer = isPrime(question);
  return [answer, question];
}

export default () => game(description, getAnswerAndQuestion);