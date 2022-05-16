import React from "react";

import setinha from "../assets/img/setinha.png";

export default function FlashCard({flashcard, index, updateProgress}){

    const {question, answer} = flashcard;
    const questionNumber = index + 1;
    const newProgress = updateProgress;

    const [status, setStatus] = React.useState({fase: "start", icon: "", answer: ""});

    function chooseAnswer(choose){

        const [answerIcon, answerChosen] = choose;

        setStatus({ ...status, fase: "respondido", icon: answerIcon, answer: answerChosen });
        updateProgress({ icon: answerIcon, answer: answerChosen });

    }

    let Flashcard;

    switch(status.fase){
        case "perguntando":
            Flashcard =
                <article className="questions">
                    <p>{question}</p>
                    <img src={setinha} alt="mostrar-resposta" onClick={() => setStatus({ ...status, fase: "respondendo" })} />
                </article>
            break;

        case "respondendo":
            Flashcard =
                <article className="questions respondendo">
                    <p>{answer}</p>
                    <div className="buttons">
                        <button className="red" onClick={() => { chooseAnswer(["close-circle", "red"]) }}>Não lembrei</button>

                        <button className="orange" onClick={() => { chooseAnswer(["help-circle", "orange"]) }}>Quase não lembrei</button>

                        <button className="green" onClick={() => { chooseAnswer(["checkmark-circle", "green"]) }}>Zap!</button>
                    </div>
                </article>
            break;

        case "respondido":
            Flashcard =
                <article className="questions respondido">
                    <p className={`line-through ${status.answer}`}>Pergunta {questionNumber}</p>
                    <ion-icon name={status.icon}></ion-icon>
                </article>
            break;

        default:
            Flashcard =
                <article className="questions inicial">
                    <p>Pergunta {questionNumber}</p>
                    <ion-icon name="play-outline" onClick={() => setStatus({ ...status, fase: "perguntando" })}></ion-icon>
                </article>
    }

    return Flashcard;

}