import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  /* запрашиваем имя внутри функции */
  console.log(`Hello, ${userName}!`);
};
