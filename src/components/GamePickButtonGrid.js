import React from "react";

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
  return (
    <>
      <div className="App gameBtnGrid">
        <GamePickButton
          buttonText={setText(gameNames[0].name)}
          makeVisible={isButtonGridVisible}
          gameName={gameNames[0].name}
          setGameName={setGameName}
          setCardType={setCardType}
          setSoundType={setSoundType}
        ></GamePickButton>
        <GamePickButton
          buttonText={setText(gameNames[1].name)}
          makeVisible={isButtonGridVisible}
          gameName={gameNames[1].name}
          setGameName={setGameName}
          setCardType={setCardType}
          setSoundType={setSoundType}
        ></GamePickButton>
        <GamePickButton
          buttonText={setText(gameNames[2].name)}
          makeVisible={isButtonGridVisible}
          gameName={gameNames[2].name}
          setGameName={setGameName}
          setCardType={setCardType}
          setSoundType={setSoundType}
        ></GamePickButton>
        <GamePickButton
          buttonText={setText(gameNames[3].name)}
          makeVisible={isButtonGridVisible}
          gameName={gameNames[3].name}
          setGameName={setGameName}
          setCardType={setCardType}
          setSoundType={setSoundType}
        ></GamePickButton>
        <GamePickButton
          buttonText={setText(gameNames[4].name)}
          makeVisible={isButtonGridVisible}
          gameName={gameNames[4].name}
          setGameName={setGameName}
          setCardType={setCardType}
          setSoundType={setSoundType}
        ></GamePickButton>
        <GamePickButton
          buttonText={setText(gameNames[5].name)}
          makeVisible={isButtonGridVisible}
          gameName={gameNames[5].name}
          setGameName={setGameName}
          setCardType={setCardType}
          setSoundType={setSoundType}
        ></GamePickButton>
        <GamePickButton
          buttonText={setText(gameNames[6].name)}
          makeVisible={isButtonGridVisible}
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
