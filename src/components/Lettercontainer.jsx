import { useState } from "react";

const Lettercontainer = (props) => {
    const {guessedLetter, correctWord, correctLetter} = props;
    // const [squareColour, setSquareColour] = useState("white")
    let squareColour = "";

    if (guessedLetter === "") {
        squareColour = "white"
    }
    else if (guessedLetter === correctLetter) {
        squareColour = "#419D78"; //green
    } else if (correctWord.split("").includes(guessedLetter) ){
        squareColour = "#E0A458"; //orange
    } else {
        squareColour = "grey";
    }


    // green - correctLetter is in right position
    // yellow - correctLetter is in correctWord, but in the wrong position
    // grey - correctLetter isn't in correctWord

    return (
    <div className="letter-container" style={{backgroundColor: squareColour}}>
        <span className="letter">{guessedLetter}</span>
    </div>)
}

export default Lettercontainer
