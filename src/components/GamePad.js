import React from "react";
import { useState } from "react";
import HomeButton from "./HomeButton";
import MemoryGame from "./MemoryGame";
import DifficultyLevel from "./DifficultyLevel";
import { correctChoice, wrongChoice, playTargetCards, setText } from "./Utils";
import "./GamePad.css";

function GamePad({ isButtonGridVisible, gameName, cardType, soundType }) {
  const [isVisible, setToVisible] = useState(false);

  const [curDifficulty, setCurDifficulty] = useState(0);
  const [counter, setCounter] = useState(0);
  const [rCounter, setRCounter] = useState(0);
  const [cards, setCards] = useState([]);
  const [targetCards, setTargetCards] = useState([]);

  const makeVisible = () => {
    setToVisible(!isVisible);
    isButtonGridVisible();
  };

  const shuffleCards = () => {
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
  };

  const handleChoice = (card) => {
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
          wrongChoice(targetCards);
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
          wrongChoice(targetCards);
          setCounter(0);
        }
        break;
    }
  };

  return (
    <>
      <h1>{setText(gameName)}</h1>
      <HomeButton makeVisible={makeVisible} />
      <DifficultyLevel
        createTargetList={createTargetList}
        shuffleCards={shuffleCards}
        gameCards={cardType}
      />

      <MemoryGame
        gameName={gameName}
        cards={cards}
        handleChoice={handleChoice}
      ></MemoryGame>
    </>
  );
}
export default GamePad;
