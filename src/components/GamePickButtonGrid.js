import React, { useState } from "react";

import GamePickButton from "./GamePickButton";
import { gameNames } from "../data/gameNames";
import "./GamePickButtonGrid.css"

function GamePickButtonGrid({ isButtonGridVisible, setGameName, setCardType, setSoundType }) {
  const [isVisible, setToVisible] = useState(false);

  const makeVisible = () => {
    setToVisible(!isVisible);
    isButtonGridVisible();
  };

  return (
    <>
      <div className="App gameBtnGrid">
        <GamePickButton
          buttonText={"זכרו את המספרים"}
          makeVisible={makeVisible}
          gameName={gameNames[0].name}
          setGameName={setGameName}
          setCardType={setCardType}
          setSoundType={setSoundType}
        ></GamePickButton>
        <GamePickButton
          buttonText={"התאימו את החפצים"}
          makeVisible={makeVisible}
          gameName={gameNames[1].name}
          setGameName={setGameName}
          setCardType={setCardType}
          setSoundType={setSoundType}
        ></GamePickButton>
        <GamePickButton
          buttonText={"מצאו את הצבעים"}
          makeVisible={makeVisible}
          gameName={gameNames[2].name}
          setGameName={setGameName}
          setCardType={setCardType}
          setSoundType={setSoundType}
        ></GamePickButton>
        <GamePickButton
          buttonText={"מצאו את ההפכים"}
          makeVisible={makeVisible}
          gameName={gameNames[3].name}
          setGameName={setGameName}
          setCardType={setCardType}
          setSoundType={setSoundType}
        ></GamePickButton>
        <GamePickButton
          buttonText={"מצאו את החיה המסתתרת"}
          makeVisible={makeVisible}
          gameName={gameNames[4].name}
          setGameName={setGameName}
          setCardType={setCardType}
          setSoundType={setSoundType}
        ></GamePickButton>
        <GamePickButton
          buttonText={"התאימו מילים למשפחה"}
          makeVisible={makeVisible}
          gameName={gameNames[5].name}
          setGameName={setGameName}
          setCardType={setCardType}
          setSoundType={setSoundType}
        ></GamePickButton>
        <GamePickButton
          buttonText={"זכרו מילים בסדר הפוך"}
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
