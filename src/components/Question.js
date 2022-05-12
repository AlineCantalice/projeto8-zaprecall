import React from "react"
import Answers from "./Answers";

export default function Question() {

    const [clicked, setClicked] = React.useState(false);

    return (
        <div className="question">
            {clicked ? <Answers /> : (
                <>
                    <p>O que é JSX?</p>
                    <img onClick={() => setClicked(true)} src="assets/img/setinha.png" alt="mostrar-resposta" />
                </>
            )}
        </div>
    )
}