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

    return <>
        <h3>{setIsWinner ? `Congratulations, you won in ${totalGuesses} guesses!!` : "You lost..."}</h3>
        <button onClick={handleClick}>Play again</button>
    </>
}


export default SuccessMessage