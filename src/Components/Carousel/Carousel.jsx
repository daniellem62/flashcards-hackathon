/* eslint-disable react/prop-types */
// Aim is to build a carousel component that can be used to display images in a carousel format.
// The component should be able to take in an array of images and display them in a carousel format.
// The component should have the following features:
// 1. Display the first three images in the array by default
// 2. Display the next three images when the right arrow is clicked
// 3. Display the previous three images when the left arrow is clicked
// 4. The carousel should loop back to the first image when the right arrow is clicked on the last image
// 5. The carousel should loop back to the last image when the left arrow is clicked on the first image
// 6. The carousel should display the images in a horizontal format
// 7. The carousel should have a fixed height and width
// 8. The carousel should have a border around it

import { useState } from "react";
import Flashcard from "../Flashcard/Flashcard";
import styles from "./Carousel.module.css";

function Carousel({ existingCards }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % existingCards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? existingCards.length - 3 : prevIndex - 3
    );
  };

  const displayedCards = existingCards.slice(currentIndex, currentIndex + 3);

  return (
    <div>
      <h1>Number of flashcards: {existingCards.length}</h1>
      <div className={styles.carousel}>
        <button className={styles.arrowLeft} onClick={handlePrev}>
          {"<"}
        </button>
        <div className={styles.images}>
          {displayedCards.map((card, index) => (
            <Flashcard
              key={index}
              question={card.question}
              answer={card.answer}
            />
          ))}
        </div>
        <button className={styles.arrowRight} onClick={handleNext}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Carousel;
