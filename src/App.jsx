/* import { useState } from "react"; */
import Header from "./components/header/header.jsx";
import "./index.css";
import Flashcard from "./Components/Flashcard/Flashcard";

function App() {
  /* const [count, setCount] = useState(0); */

  return (
    <div>
      <Header />
      <Flashcard />
    </div>
  );
}

export default App;
