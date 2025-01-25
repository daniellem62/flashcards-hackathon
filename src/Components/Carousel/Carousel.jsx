import { useState, useEffect } from "react";
import Flashcard from "../Flashcard/Flashcard";
import styles from "./Carousel.module.css";

function Carousel({ existingCards }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState([]);

  // Initialize cards with a unique ID
  useEffect(() => {
    const cardsWithId = existingCards.map((card, index) => ({
      ...card,
      id: index + 1, // Assign a static ID starting at 1
    }));
    setCards(cardsWithId);
  }, [existingCards]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? cards.length - 3 : prevIndex - 3
    );
  };

  const handleDelete = (idToDelete) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== idToDelete));
    console.log("Deleted card with ID:", idToDelete);
  };

  const displayedCards = cards.slice(currentIndex, currentIndex + 3);

  function shuffleArray() {
    let shuffledArray = [...cards]; // create a copy
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    setCards(shuffledArray);
    setCurrentIndex(0);
  }

  return (
    <div>
      <h1 className={styles.h1}>Number of flashcards: {cards.length}</h1>
      <div className={styles.carousel}>
        <button className={styles.arrowLeft} onClick={handlePrev}>
          {"<"}
        </button>
        <div className={styles.images}>
          {displayedCards.map((card) => (
            <Flashcard
              key={card.id} // Use the unique ID as the key
             // cardIndex={card.id} // Pass the static ID as the index
              question={card.question}
              answer={card.answer}
              onDelete={() => handleDelete(card.id)} // Delete based on ID
            />
          ))}
        </div>
        <button className={styles.arrowRight} onClick={handleNext}>
          {">"}
        </button>
      </div>
      <button className={styles.shuffle} onClick={shuffleArray}>
        Shuffle
      </button>
    </div>
  );
}

export default Carousel;
