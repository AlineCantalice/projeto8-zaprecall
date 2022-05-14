import React from "react"
import Answers from "./Answers";

import setinha from "../assets/img/setinha.png";

export default function Question({question, answer}) {

    const [clicked, setClicked] = React.useState(false);

    return (
        <div className="question">
            {clicked ? <Answers answer={answer}/> : (
                <>
                    <p>{question}</p>
                    <img onClick={() => setClicked(true)} src={setinha} alt="mostrar-resposta" />
                </>
            )}
        </div>
    )
}