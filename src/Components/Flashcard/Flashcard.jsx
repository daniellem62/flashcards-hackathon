/* eslint-disable react/prop-types */
import styles from "./Flashcard.module.css";
import { useState } from "react";

function Flashcard({ question, answer }) {
  // Initialise state as false, as cards will render question pre flip
  const [flipped, setFlipped] = useState(false);

  // Function that "toggles" between flipped or not flipped
  function handleFlip() {
    // Sets flipped to true upon first click
    setFlipped(!flipped);
  }
  // Runs the handleFlip function when clicked
  return (
    <div className={styles.card} onClick={handleFlip}>
      {flipped ? question : answer}
    </div> // Ternary operator that renders either question or answer depending on state of flipped
  );
}

export default Flashcard;
