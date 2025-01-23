/* eslint-disable react/prop-types */
import styles from "./Flashcard.module.css";
import { useState } from "react";
import { motion } from "motion/react"

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
    <motion.div initial={{ scale: 1 }}  whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1 }} className={styles.card} onClick={handleFlip}><p className={styles.emoji}>{"😁"}</p>
      <div>{flipped ? answer : question}</div>
    </motion.div> // Ternary operator that renders either question or answer depending on state of flipped
  );
}

export default Flashcard;
