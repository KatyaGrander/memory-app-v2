import React from "react";

import SingleAnimalCard from "./SingleAnimalCard";
import SingleOppositesCard from "./SingleOppositesCard";
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
      gameName === "reverseOrder" ||
      gameName === "objectsFamily" ? (
        <div className="cardGrid">
          {cards.map((card) => (
            <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
          ))}
        </div>
      ) : null}

      {gameName === "opposites" ? (
        <div className="cardGrid">
          {cards.map((card) => (
            <SingleOppositesCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
            />
          ))}
        </div>
      ) : null}

      {gameName === "colors" ? (
        <div className="colorsGameGrid">
          <img
            className="colorsImage"
            src="./img/colorsGameImage.png"
            alt="תמונת חיות צבעוניות"
          />
          <div className="cardGridColors">
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

      {gameName === "objects" ? (
        <div>TBD - needs proper design first </div>
      ) : null}
    </>
  );
}
