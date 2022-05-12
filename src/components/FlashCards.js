import Questions from "./Questions"

import logoPequeno from "../assets/img/logo-pequeno.png";
import emoticonParty from "../assets/img/party.png";

export default function FlashCards() {

    function Header() {
        return (
            <div className="header">
                <img src={logoPequeno} alt="logo-pequeno" />
                <h1>ZapRecall</h1>
            </div>
        )
    }

    function Conteiner() {
        return (
            <ul className="conteiner-flashcards">
                <Questions counter={1} />
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