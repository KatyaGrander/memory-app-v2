import React from "react";
import { useState } from "react";
import HomeButton from "./HomeButton";
import MemoryGame from "./MemoryGame";
import DifficultyLevel from "./DifficultyLevel";
import { correctChoice, wrongChoice, setText } from "./Utils";
import "./GamePad.css";
import LevelsButton from "./LevelsButton";

function GamePad({ isButtonGridVisible, gameName, cardType, soundType }) {
  const [levelVisible, setLevelToVisible] = useState(true);
  const [curDifficulty, setCurDifficulty] = useState(0);
  const [counter, setCounter] = useState(0);
  const [rCounter, setRCounter] = useState(0);
  const [cards, setCards] = useState([]);
  const [targetCards, setTargetCards] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const isLevelsVisible = () => {
    setLevelToVisible(!levelVisible);
  };

  const playTargetCards = (curTarget) => {
    for (let i = 0; i < curTarget.length; i++) {
      const audio = new Audio(curTarget[i].src);
      setTimeout(() => audio.play(), 2000 * i);
    }
    clearTimeout();
  };

  const shuffleCards = () => {
    setIsDisabled(true);
    const shuffled = cardType.sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };

  const createTargetList = (difficulty) => {
    const target = soundType
      .sort(() => Math.random() - Math.random())
      .slice(0, difficulty);

    playTargetCards(target);
    setTargetCards(target);
    setCurDifficulty(difficulty);
    setRCounter(difficulty - 1);
    setTimeout(() => setIsDisabled(false), 2000 * difficulty);
    clearTimeout();
  };

  const handleChoice = (card) => {
    setIsDisabled(false);
    switch (gameName) {
      case "numbers":
        if (targetCards[counter].id + 1 === card.id) {
          if (counter < curDifficulty - 1) {
            correctChoice();
            setCounter(counter + 1);
          } else {
            correctChoice();
            setCounter(0);
            createTargetList(curDifficulty);
            shuffleCards();
          }
        } else {
          wrongChoice();
          playTargetCards(targetCards);
          setCounter(0);
        }

        break;

      case "reverseOrder":
        if (targetCards[rCounter].id === card.id) {
          if (rCounter > 0) {
            correctChoice();
            setRCounter(rCounter - 1);
          } else {
            correctChoice();
            setRCounter(curDifficulty - 1);
            createTargetList(curDifficulty);
            shuffleCards();
          }
        } else {
          wrongChoice(targetCards);
          setRCounter(curDifficulty - 1);
        }

        break;

      default:
        if (targetCards[counter].id === card.id) {
          if (counter < curDifficulty - 1) {
            correctChoice();
            setCounter(counter + 1);
          } else {
            correctChoice();
            setCounter(0);
            createTargetList(curDifficulty);
            shuffleCards();
          }
        } else {
          wrongChoice();
          playTargetCards(targetCards);
          setCounter(0);
        }
        break;
    }
  };

  return levelVisible ? (
    <>
      <h1>בחרו רמה</h1>
      <HomeButton makeVisible={isButtonGridVisible} isDisabled={isDisabled} />
      <DifficultyLevel
        createTargetList={createTargetList}
        shuffleCards={shuffleCards}
        gameCards={cardType}
        makeLevelsVisible={isLevelsVisible}
        levelVisible={levelVisible}
      />
    </>
  ) : (
    <>
      <h1>{setText(gameName)}</h1>
      <HomeButton makeVisible={isButtonGridVisible} isDisabled={isDisabled} />
      <LevelsButton makeLevelsVisible={isLevelsVisible}/>
      <MemoryGame
        gameName={gameName}
        cards={cards}
        handleChoice={handleChoice}
      />
    </>
  );
}
export default GamePad;
