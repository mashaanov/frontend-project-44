import readlineSync from 'readline-sync';

const countRound = 3;
let i = 0;

export const game = (description, getAnswerAndQuestion) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${description}`);

  for (i; i < countRound; i += 1) {
    const [answer, question] = getAnswerAndQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const formattedUserAnswer = (typeof answer === 'number' ? +userAnswer : userAnswer);

    if (formattedUserAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }

  if (i === countRound) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default game;
