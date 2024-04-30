import { game } from '../gameTemplate.js';

function getRandomIntInclusive(min, max) {
  let minValue = min;
  let maxValue = max;
  minValue = Math.ceil(min);
  maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
  // максимум и минимум включаются
}

const collOfOperators = ['+', '-', '*'];

const getRandomOperator = () => {
  const randomIndex = [getRandomIntInclusive(0, 2)];
  return collOfOperators[randomIndex];
};

const getRandomExpression = () => {
  const operand1 = getRandomIntInclusive(0, 100);
  const operand2 = getRandomIntInclusive(0, 100);
  const operator = getRandomOperator();
  return (`${operand1} ${operator} ${operand2}`);
};

const description = 'What is the result of the expression?';

const getCalc = (expression) => {
  const collElemOfExpression = expression.split(' ');
  let [operand1, operator, operand2] = collElemOfExpression;
  operand1 = +operand1;
  operand2 = +operand2;
  let result = 0;

  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      break;
  }

  return result;
};

const getAnswerAndQuestion = () => {
  const question = getRandomExpression();
  const answer = getCalc(question);
  return [answer, question];
};

export default () => game(description, getAnswerAndQuestion);
