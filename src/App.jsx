// importing state hook
import { useState, useEffect } from "react";

// importing default styling
import "./index.css";

// importing components
import Footer from "./Components/Footer/footer.jsx";
import Header from "./Components/header/header.jsx";
import Form from "./components/form/form.jsx";
/* import Flashcards from "./Components/Flashcards/Flashcards.jsx"; */

//testing carousel
import Carousel from "./Components/Carousel/Carousel.jsx";

// importing dataset
import data from "../src/assets/data.js";

function App() {
  // Initialise the state with the imported data
  const [cards, setCards] = useState(() => {
    // Retrieve stored data from local storage
    const savedCards = localStorage.getItem("flashcards");
    return savedCards ? JSON.parse(savedCards) : data; // Use saved data or default data
  });

  useEffect(() => {
    localStorage.setItem("flashcards", JSON.stringify(cards));
  }, [cards]);

  return (
    <div>
      <Header />
      <Form cards={cards} setCards={setCards} />
      <Carousel existingCards={cards} />
      {/* <Flashcards existingCards={cards} /> */}
      <Footer />
    </div>
  );
}

export default App;
