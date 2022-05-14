import Question from "./Question";
import React from "react";

export default function Questions({ question, answer, counter }) {

    const [clicked, setClicked] = React.useState(false);

    return (
        <li onClick={() => setClicked(true)}>
            {clicked ? <Question question={question} answer={answer} /> : (<div className="questions">
                <p className="">Pergunta {counter}</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>)}
        </li>
    )
}