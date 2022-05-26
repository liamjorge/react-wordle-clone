import "./App.css";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import Inputfield from "./components/Inputfield";
import { useState } from "react";

function App() {
  const wordList = ["river", "dream", "happy"];
  const randomNum = Math.floor(Math.random() * wordList.length);
  const [correctWord, setCorrectWord] = useState(wordList[randomNum]);
  const [guesses, setGuesses] = useState([]);

  return (
    <div className="App">
      <Header />
      <Gameboard correctWord={correctWord} guesses={guesses} />
      <Inputfield guesses={guesses} setGuesses={setGuesses} />
    </div>
  );
}

export default App;
