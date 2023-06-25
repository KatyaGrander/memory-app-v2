import React from "react";

import SingleAnimalCard from "./SingleAnimalCard";

export default function MemoryGame({ gameName, cards, handleChoice }) {
  return (
    <>
      <>{gameName}</>

      <div className="cardGrid">
        {cards.map((card) => (
          <SingleAnimalCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
          />
        ))}
      </div>
    </>
  );
}
