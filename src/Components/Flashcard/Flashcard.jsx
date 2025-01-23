/* eslint-disable react/prop-types */
import styles from "./Flashcard.module.css";

function Flashcard({ question, answer }) {
  return (
    <div className={styles.card}>
      <div>{question}</div>
      <p>{answer}</p>
    </div>
  );
}

export default Flashcard;
