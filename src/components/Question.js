import React from "react"
import Answers from "./Answers";

import setinha from "../assets/img/setinha.png";

export default function Question() {

    const [clicked, setClicked] = React.useState(false);

    return (
        <div className="question">
            {clicked ? <Answers /> : (
                <>
                    <p>O que é JSX?</p>
                    <img onClick={() => setClicked(true)} src={setinha} alt="mostrar-resposta" />
                </>
            )}
        </div>
    )
}