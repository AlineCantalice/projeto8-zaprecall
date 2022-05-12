import Question from "./Question";
import React from "react";

export default function Questions({ counter }) {

    const [clicked, setClicked] = React.useState(false);

    return (
        <li onClick={() => setClicked(true)}>
            {clicked ? <Question /> : (<div className="questions">
                <p>Pergunta {counter}</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>)}
        </li>
    )
}