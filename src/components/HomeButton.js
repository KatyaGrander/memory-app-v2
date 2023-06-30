import React from "react";
import "./HomeButton.css";

function HomeButton({ makeVisible, isDisabled }) {
  return (
    <>
      <button className="homeBtn" onClick={isDisabled ? null : makeVisible}>
        <img src="/img/homeButton.png" alt="חזרה לתפריט" />
      </button>
    </>
  );
}

export default HomeButton;
