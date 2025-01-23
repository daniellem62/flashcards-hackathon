/* eslint-disable react/prop-types */
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
