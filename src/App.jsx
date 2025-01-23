/* import { useState } from "react"; */

import Footer from "./Components/Footer/footer.jsx";
import Header from "./components/header/header.jsx";
import Form from "./components/form/form.jsx";
import "./index.css";
import Flashcards from "./Components/Flashcards/Flashcards.jsx";

function App() {
  /* const [count, setCount] = useState(0); */

  return (
    <div>
      <Header />
      <Form />
      <Flashcards />
      <Footer />
    </div>
  );
}

export default App;
