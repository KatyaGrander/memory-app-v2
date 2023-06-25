import React from "react";

function GamePickButton({
  buttonText,
  makeVisible,
  gameName,
  setGameName,
  setCardType,
  setSoundType,
}) {
  const configureCurGame = () => {
    const CardList = require("../data/" + gameName + "Cards.js").default();
     const SoundList = require("../data/" + gameName + "Sounds.js").default();

    setCardType(CardList);
    setSoundType(SoundList);
  };

  return (
    <>
      <button
        className="selectGameBtn sGBtn4"
        onClick={() => {
          makeVisible();
          setGameName(gameName);
          configureCurGame();
        }}
      >
        {buttonText}
      </button>
    </>
  );
}

export default GamePickButton;
