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
                <li className="question">
                    <p>{question}</p>
                    <img src={setinha} alt="mostrar-resposta" onClick={() => setStatus({ ...status, fase: "respondendo" })} />
                </li>
            break;

        case "respondendo":
            Flashcard =
                <li className="question respondendo">
                    <p>{answer}</p>
                    <div className="buttons">
                        <button className="red-button" onClick={() => { chooseAnswer(["close-circle", "red"]) }}>Não lembrei</button>

                        <button className="orange-button" onClick={() => { chooseAnswer(["help-circle", "orange"]) }}>Quase não lembrei</button>

                        <button className="green-button" onClick={() => { chooseAnswer(["checkmark-circle", "green"]) }}>Zap!</button>
                    </div>
                </li>
            break;

        case "respondido":
            Flashcard =
                <li className="question respondido">
                    <p className={`line-through ${status.answer}`}>Pergunta {questionNumber}</p>
                    <ion-icon name={status.icon}></ion-icon>
                </li>
            break;

        default:
            Flashcard =
                <li className="question inicial">
                    <p>Pergunta {questionNumber}</p>
                    <ion-icon name="play-outline" onClick={() => setStatus({ ...status, fase: "perguntando" })}></ion-icon>
                </li>
    }

    return Flashcard;

}