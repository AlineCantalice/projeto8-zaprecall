import Questions from "./Questions"

import logoPequeno from "../assets/img/logo-pequeno.png";
import emoticonParty from "../assets/img/party.png";

export default function FlashCards() {

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
    ]

    function Header() {
        return (
            <div className="header">
                <img src={logoPequeno} alt="logo-pequeno" />
                <h1>ZapRecall</h1>
            </div>
        )
    }

    function Conteiner() {
        shuffle(deck);
        return (
            <ul className="conteiner-flashcards">
                {deck.map((element, index) => <Questions question={element.question} answer={element.answer} counter={index+1} />)}
            </ul>
        )
    }

    function FooterEndRecall() {
        return (
            <div className="footer-end-recall">
                <div className="header-end">
                    <img src={emoticonParty} alt="party" />
                    <p>Parabéns!</p>
                </div>
                <div className="conteiner-end">
                    <p>Você não esqueceu de nenhum flashcard!</p>
                </div>
                <div className="footer-end">
                    <p>0/4 CONCLUÍDOS</p>
                    <div className="icons">
                        <ion-icon className="red" name="close-circle"></ion-icon>
                        <ion-icon className="orange" name="help-circle"></ion-icon>
                        <ion-icon className="green" name="checkmark-circle"></ion-icon>
                    </div>
                </div>
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

    function Footer() {
        return (
            <div className="footer footer-end-recall footer-end">
                <p>0/4 CONCLUÍDOS</p>
                <div className="icons">
                    <ion-icon className="red" name="close-circle"></ion-icon>
                    <ion-icon className="orange" name="help-circle"></ion-icon>
                    <ion-icon className="green" name="checkmark-circle"></ion-icon>
                </div>
            </div>
        )
    }

    return (
        <>
            <Header />
            <Conteiner />
            <Footer />
        </>
    )
}