import { game } from "../gameTemplate.js";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // максимум и минимум включаются
};

const description = "What number is missing in the progression?";

const getArithProgression = () => {
  const progression = [];
  const step = getRandomIntInclusive(1, 10);
  let elem = getRandomIntInclusive(1, 10);
  progression.push(elem);

  while (progression.length < 10) {
    elem += step
    progression.push(elem);
  };

  const randomIndex = getRandomIntInclusive(0, 9);
  const replacedElem = progression[randomIndex];
  progression[randomIndex] = '..';
  const formattedProgression = progression.join(' '); 

  return [formattedProgression, replacedElem];
};

const getAnswerAndQuestion = () => {
  const [formattedProgression, replacedElem] = getArithProgression();
  const question = formattedProgression;
  const answer = replacedElem;
  return [answer, question];
}

export default () => game(description, getAnswerAndQuestion);
