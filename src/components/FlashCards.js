import React from "react";

import Deck from "./Deck";
import Progress from "./Progress";
import End from "./End";

import logoPequeno from "../assets/img/logo-pequeno.png";

const deck = [
    {
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript"
    },
    {
        question: "O React é __",
        answer: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
        question: "Componentes devem iniciar com __",
        answer: "letra maiúscula"
    },
    {
        question: "Podemos colocar __ dentro do JSX",
        answer: "expressões"
    },
    {
        question: "O ReactDOM nos ajuda __",
        answer: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        question: "Usamos o npm para __",
        answer: "gerenciar os pacotes necessários e suas dependências"
    },
    {
        question: "Usamos props para __",
        answer: "passar diferentes informações para componentes"
    },
    {
        question: "Usamos estado (state) para __",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
];

export default function FlashCards() {

    const [progress, setProgress] = React.useState(
        {
            flashcardNumber: deck.length,
            answeredFlashcards: 0,
            icons: [],
            answers: [],
        })

    const [finished, setFinished] = React.useState(false);

    function updateProgress(infoProgress) {
        const { icon, answer } = infoProgress;
        const updateAnsweredFlashcards = progress.answeredFlashcards + 1;
        const iconsAtualizados = [...progress.icons, icon];
        const updateAnswers = [...progress.answers, answer];
        setProgress({
            ...progress,
            answeredFlashcards: updateAnsweredFlashcards,
            icons: iconsAtualizados,
            answers: updateAnswers
        });

        if (updateAnsweredFlashcards === progress.flashcardNumber) {
            setFinished(true);
        }
    }

    shuffle(deck);

    function Header() {
        return (
            <div className="header">
                <img src={logoPequeno} alt="logo-pequeno" />
                <h1>ZapRecall</h1>
            </div>
        )
    }

    function shuffle(deck) {

        for (let index = deck.length; index; index--) {

            const randomIndex = Math.floor(Math.random() * index);

            [deck[index - 1], deck[randomIndex]] =
                [deck[randomIndex], deck[index - 1]];
        }
    }

    return (
        <>
            <Header />

            <main>
                <ul className="conteiner-flashcards">
                    <Deck deck={deck} updateProgress={updateProgress} />
                </ul>
            </main>

            <footer>
                {!finished ?
                    <Progress flashcardNumber={progress.flashcardNumber} answeredFlashcards={progress.answeredFlashcards} icons={progress.icons} /> :
                    <End flashcardNumber={progress.flashcardNumber} answeredFlashcards={progress.answeredFlashcards} icons={progress.icons} answers={progress.answers} />}
            </footer>
        </>
    )
}