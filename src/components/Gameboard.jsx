import Wordcontainer  from "./Wordcontainer";

const Gameboard = (props) => {
    const {correctWord, guesses} = props;
    let wordContainers = [];
    for (let i=0; i<5; i++) {
        wordContainers.push(<Wordcontainer correctWord={correctWord} guess={ guesses[i]!=undefined ? guesses[i] : ""} key={i} />)
    }

    return (
        <section className="word-grid">
            {wordContainers.map((container) => container)}
        </section>
    )
}

export default Gameboard