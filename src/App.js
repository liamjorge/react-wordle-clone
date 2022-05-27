import "./App.css";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import Inputfield from "./components/Inputfield";
import wordList from "./utils/wordsArray";
import { useState } from "react";

function App() {
  const randomNum = Math.floor(Math.random() * wordList.length);
  const [correctWord, setCorrectWord] = useState(wordList[randomNum]);
  const [guesses, setGuesses] = useState([]);
  console.log(correctWord);
  return (
    <div className="App">
      <Header />
      <Gameboard correctWord={correctWord} guesses={guesses} />
      <Inputfield
        guesses={guesses}
        setGuesses={setGuesses}
        correctWord={correctWord}
        setCorrectWord={setCorrectWord}
      />
    </div>
  );
}

export default App;
