import React from "react";
import "./HomeButton.css";

function HomeButton({ makeVisible, muteAll }) {
  return (
    <>
      <button
        className="homeBtn"
        onClick={() => {
          makeVisible();
        }}
      >
        <img src="/img/homeButton.png" alt="חזרה לתפריט" />
      </button>
    </>
  );
}

export default HomeButton;
