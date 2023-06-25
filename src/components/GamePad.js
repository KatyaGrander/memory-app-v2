import React from "react";
import { useState } from "react";
import HomeButton from "./HomeButton";
import MemoryGame from "./MemoryGame";
import DifficultyLevel from "./DifficultyLevel";
import { correctChoice, wrongChoice, playTargetCards } from "./Utils";

function GamePad({ isButtonGridVisible, gameName, cardType, soundType }) {
  const [isVisible, setToVisible] = useState(false);

  const [curDifficulty, setCurDifficulty] = useState(0);
  const [counter, setCounter] = useState(0);
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
  };

  const handleChoice = (card) => {
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
  };

  return (
    <>
      <p>{gameName}</p>
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

/*  const CurrentGame = require("./" + gameName).default;

  return (
    <div>
      <div>
        <HomeButton makeVisible={makeVisible} />
      </div>

      <CurrentGame />
    </div>
  );
}*/
