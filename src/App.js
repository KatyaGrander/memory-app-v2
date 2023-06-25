import React, { useState } from "react";

import "./App.css";

import GamePickButtonGrid from "./components/GamePickButtonGrid";
import GamePad from "./components/GamePad";

function App() {
  const [visibleGrid, setVisibleGrid] = useState("true");
  const [gameName, setGameName] = useState(null);
  const [soundType, setSoundType] = useState(null);
  const [cardType, setCardType] = useState(null);

  const isButtonGridVisible = () => {
    setVisibleGrid(!visibleGrid);
  };

  return visibleGrid ? (
    <GamePickButtonGrid
      isButtonGridVisible={isButtonGridVisible}
      setGameName={setGameName}
      setCardType={setCardType}
      setSoundType={setSoundType}
    />
  ) : (
    <GamePad
      isButtonGridVisible={isButtonGridVisible}
      gameName={gameName}
      soundType={soundType}
      cardType={cardType}
    />
  );
}
export default App;
