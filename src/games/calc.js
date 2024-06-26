import { game } from '../gameTemplate.js';
import getRandomIntInclusive from '../random-function.js';

const collOfOperators = ['+', '-', '*'];

const getRandomOperator = () => {
  const randomIndex = getRandomIntInclusive(0, 2);
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
  const [operand1, operator, operand2] = collElemOfExpression;
  const operandOne = +operand1;
  const operandTwo = +operand2;
  let result = 0;

  switch (operator) {
    case '+':
      result = operandOne + operandTwo;
      break;
    case '-':
      result = operandOne - operandTwo;
      break;
    case '*':
      result = operandOne * operandTwo;
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
