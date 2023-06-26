import React from "react";

import SingleAnimalCard from "./SingleAnimalCard";
import SingleCard from "./SingleCard";
import "./MemoryGame.css";

export default function MemoryGame({ gameName, cards, handleChoice }) {
  return (
    <>
      {gameName === "animal" ? (
        <div className="cardGrid">
          {cards.map((card) => (
            <SingleAnimalCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
            />
          ))}
        </div>
      ) : null}

      {gameName === "numbers" ||
      gameName === "opposites" ||
      gameName === "reverseOrder" ? (
        <div className="cardGrid">
          {cards.map((card) => (
            <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
          ))}
        </div>
      ) : null}

      {gameName === "colors" ? (
        <div>
          <img src="./img/colorsGameImage.png" alt="תמונת חיות צבעוניות" />
          <div className="cardGrid">
            {cards.map((card) => (
              <SingleCard
                key={card.id}
                card={card}
                handleChoice={handleChoice}
              />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
