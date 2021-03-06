import { useState } from "react";
import Message from "./Message";

const Inputfield = (props) => {
    const {guesses, setGuesses, correctWord, setCorrectWord} = props;
    const [inputValue, setInputValue] = useState("") 
    const [isHidden, setIsHidden] = useState(true);
    const [isWinner, setIsWinner] = useState(false);
    const [isLoser, setIsLoser] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(guesses.length === 4 && inputValue !== correctWord){
            console.log("You lost");
            setIsLoser(true);
        }
        if (inputValue.length === 5) {
            if(correctWord === inputValue){
                setIsWinner(true);
            }
            setGuesses([...guesses, inputValue])
            setInputValue("")
        } else {
            setIsHidden(false);
        }
    }

    if(isLoser){
        return <Message setIsLoser={setIsLoser} setGuesses={setGuesses} setCorrectWord={setCorrectWord}/>
    }

    if(isWinner){
        return <Message setIsWinner={setIsWinner} setGuesses={setGuesses} setCorrectWord={setCorrectWord} totalGuesses={guesses.length}/>;
    }


    return (
    <>
    <form onSubmit={handleSubmit} className="form__group">
        <label htmlFor="input-word" className="form__label">Take a guess</label>
        <input 
         value={inputValue}
         className="form__field"
         onChange={(event) => {
             setIsHidden(true);
             if (event.target.value.length <= 5) {
             setInputValue(event.target.value.toLowerCase())}
            }}
         id="input-word"
        />
        <button type="submit">Submit<span></span><span></span><span></span><span></span></button>
        <p style={{visibility: isHidden ? "hidden" : "visible" , color: "red"}}>Guess must be 5 letters</p>
    </form>
    </>
    )
};

export default Inputfield