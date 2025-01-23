// importing state hook
import { useState } from "react";

// importing default styling
import "./index.css";

// importing components
import Footer from "./Components/Footer/footer.jsx";
import Header from "./components/header/header.jsx";
import Form from "./components/form/form.jsx";
import Flashcards from "./Components/Flashcards/Flashcards.jsx";

// importing dataset
import data from "../src/assets/data.js";

function App() {
  // Initialise the state with the imported data
  const [cards, setCards] = useState(data);

  return (
    <div>
      <Header />
      <Form />
      <Flashcards existingCards={cards} />
      <Footer />
    </div>
  );
}

export default App;
