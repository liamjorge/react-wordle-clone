import wordList from "../utils/wordsArray";


const SuccessMessage = (props) => {
    const {setCorrectWord, setGuesses, setIsWinner, setIsLoser, totalGuesses} = props;

    const handleClick = () => {
        const randomNum = Math.floor(Math.random() * wordList.length);
        setCorrectWord(wordList[randomNum]);
        setGuesses([]);
        if(setIsWinner) setIsWinner(false);
        if(setIsLoser) setIsLoser(false);
    }
    const successMessage = `Congratulations, you won in ${totalGuesses} ` + (totalGuesses===1 ? `guess!` : `guesses!`)

    return <>
        <h3>{setIsWinner ? successMessage : "You lost..."}</h3>
        <button onClick={handleClick}>Play again<span></span><span></span><span></span><span></span></button>
    </>
}


export default SuccessMessage