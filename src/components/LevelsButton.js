import React from "react";
import "./LevelsButton.css";

function LevelsButton({makeLevelsVisible}) {

  return (
    <>
      <button className="lvlBtn" onClick={makeLevelsVisible}>
       <img src="./img/levelButton.png" alt="בחרו רמה"/>
      </button>
    </>
  );
}

export default LevelsButton;
