import React from "react";
import "./DifficultyLevel.css";

function DifficultyLevel({
  createTargetList,
  shuffleCards,
  gameCards,
  makeLevelsVisible
}) {
  const handleClick = (difficulty) => {
    createTargetList(difficulty, gameCards);
    shuffleCards();
  };

  return (
    <div className="LevelSelect">
      <button
        className="levelBtn lb4"
        onClick={() => {
          handleClick(5);
          makeLevelsVisible();
        }}
      >
        4
      </button>
      <button
        className="levelBtn lb3"
        onClick={() => {
          handleClick(4);
          makeLevelsVisible();
        }}
      >
        3
      </button>
      <button
        className="levelBtn lb2"
        onClick={() => {
          handleClick(3);
          makeLevelsVisible();
        }}
      >
        2
      </button>
      <button
        className="levelBtn lb1"
        onClick={() => {
          handleClick(2);
          makeLevelsVisible();
        }}
      >
        1
      </button>
    
    </div>
  );
}

export default DifficultyLevel;
