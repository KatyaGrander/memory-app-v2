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
  const curGametext = gameDescribtion.find((obj) => {
    return obj.id === textID;
  });
  return curGametext.text;
};

export const setAbout = (textID) => {
  const curGameInfo = gameDescribtion.find((obj) => {
    return obj.id === textID;
  });
return curGameInfo.about;
};
