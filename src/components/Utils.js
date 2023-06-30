import { gameDescribtion } from "../data/gameDescribtion";

const wrongChoiceSound = new Audio("./sounds/failure.mp3");
const correctChoiceSound = new Audio("./sounds/success.mp3");


export const wrongChoice = () => {
  wrongChoiceSound.play();
 // playTargetCards(targetCards);
};

export const correctChoice = () => {
  correctChoiceSound.play();
};

export const setText = (textID) => {
  const text = gameDescribtion.find((obj) => {
    return obj.id === textID;
  });
  return text.text;
};
