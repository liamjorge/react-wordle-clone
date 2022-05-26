import Lettercontainer  from "./Lettercontainer";

const Wordcontainer = (props) => {
    const {correctWord, guess} = props;
    let letterContainers = [];
    for (let i=0; i<5; i++) {
        letterContainers.push(<Lettercontainer correctWord={correctWord} correctLetter={correctWord[i]} guessedLetter={ guess[i]!=undefined ? guess[i] : ""} key={i} />)
    }

    return (
        <div className="word-container">
            {letterContainers.map((container) => container)}
        </div>
    )
}

export default Wordcontainer