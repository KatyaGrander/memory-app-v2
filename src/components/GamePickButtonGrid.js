import React, { useState } from "react";

import GamePickButton from "./GamePickButton";
import { gameNames } from "../data/gameNames";
import { setText } from "./Utils";

import "./GamePickButtonGrid.css";

function GamePickButtonGrid({
  isButtonGridVisible,
  setGameName,
  setCardType,
  setSoundType,
}) {
  const [isVisible, setToVisible] = useState(false);

  const makeVisible = () => {
    setToVisible(!isVisible);
    isButtonGridVisible();
  };

  return (
    <>
      <div className="App gameBtnGrid">
        <GamePickButton
          buttonText={setText(gameNames[0].name)}
          makeVisible={makeVisible}
          gameName={gameNames[0].name}
          setGameName={setGameName}
          setCardType={setCardType}
          setSoundType={setSoundType}
        ></GamePickButton>
        <GamePickButton
          buttonText={setText(gameNames[1].name)}
          makeVisible={makeVisible}
          gameName={gameNames[1].name}
          setGameName={setGameName}
          setCardType={setCardType}
          setSoundType={setSoundType}
        ></GamePickButton>
        <GamePickButton
          buttonText={setText(gameNames[2].name)}
          makeVisible={makeVisible}
          gameName={gameNames[2].name}
          setGameName={setGameName}
          setCardType={setCardType}
          setSoundType={setSoundType}
        ></GamePickButton>
        <GamePickButton
          buttonText={setText(gameNames[3].name)}
          makeVisible={makeVisible}
          gameName={gameNames[3].name}
          setGameName={setGameName}
          setCardType={setCardType}
          setSoundType={setSoundType}
        ></GamePickButton>
        <GamePickButton
          buttonText={setText(gameNames[4].name)}
          makeVisible={makeVisible}
          gameName={gameNames[4].name}
          setGameName={setGameName}
          setCardType={setCardType}
          setSoundType={setSoundType}
        ></GamePickButton>
        <GamePickButton
          buttonText={setText(gameNames[5].name)}
          makeVisible={makeVisible}
          gameName={gameNames[5].name}
          setGameName={setGameName}
          setCardType={setCardType}
          setSoundType={setSoundType}
        ></GamePickButton>
        <GamePickButton
          buttonText={setText(gameNames[6].name)}
          makeVisible={makeVisible}
          gameName={gameNames[6].name}
          setGameName={setGameName}
          setCardType={setCardType}
          setSoundType={setSoundType}
        ></GamePickButton>
      </div>
    </>
  );
}

export default GamePickButtonGrid;
