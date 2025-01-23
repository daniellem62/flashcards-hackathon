/* import data from "../../assets/data"; */
import Flashcard from "../Flashcard/Flashcard";
import styles from "./Flashcards.module.css";

function Flashcards() {
  return (
    <div className={styles.cardContainer}>
      <Flashcard />
      <Flashcard />
      <Flashcard />
    </div>
  );
}

export default Flashcards;
