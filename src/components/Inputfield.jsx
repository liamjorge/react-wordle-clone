import { useState } from "react";

const Inputfield = (props) => {
    const {guesses, setGuesses} = props;
    const [inputValue, setInputValue] = useState("") 
    const [isHidden, setIsHidden] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.length === 5) {
            setGuesses([...guesses, inputValue])
            setInputValue("")
        } else {
            setIsHidden(false);
        }
    }
    return (
    <>

    <form onSubmit={handleSubmit}>
        <label htmlFor="input-word">Take a guess</label>
        <input 
         value={inputValue}
         onChange={(event) => {
             setIsHidden(true);
             if (event.target.value.length <= 5) {
             setInputValue(event.target.value)}
            }}
         id="input-word"
        />
        <button type="submit">Submit</button>
        <p style={{visibility: isHidden ? "hidden" : "visible"}}>Guess must be 5 letters</p>
    </form>
    </>
    )
};

export default Inputfield