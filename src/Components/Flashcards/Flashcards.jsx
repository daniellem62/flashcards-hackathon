/* eslint-disable react/prop-types */

// This is not needed if we are using the carousel. Can include whichever and comment the other out

import Flashcard from "../Flashcard/Flashcard";
import styles from "./Flashcards.module.css";

function Flashcards({ existingCards }) {
  return (
    <div className={styles.cardContainer}>
      {existingCards.map((card, index) => {
        return (
          <Flashcard
            key={index}
            question={card.question}
            answer={card.answer}
          />
        );
      })}
    </div>
  );
}

export default Flashcards;
