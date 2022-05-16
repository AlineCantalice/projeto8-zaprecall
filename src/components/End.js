import party from "../assets/img/party.png";
import sad from "../assets/img/sad.png";

export default function End({ flashcardNumber, answeredFlashcards, icons, answers }) {

    let title = "";
    let message = "";
    let emoji = "";

    if (answers.includes("red")) {
        title = "Putz..."
        message = `Ainda faltaram alguns... Mas não desanime`;
        emoji = sad;
    }
    else {
        title = "Parabéns!"
        message = `Você não esqueceu de nenhum flashcard!`;
        emoji = party;
    }

    return (
        <section className="footer-end-recall">
            <div className="header-end">
                <img src={emoji} alt={title} />
                <h3>{title}</h3>
            </div>

            <div className="conteiner-end">
                <p className="conteiner-end">{message}</p>
            </div>

            <div className="footer-end">
                <p className="concluidos">{answeredFlashcards}/{flashcardNumber} CONCLUÍDOS</p>
            </div>

            <div className="icons">
                {icons.map((icon, index) => <ion-icon name={icon} key={index}> </ion-icon>)}
            </div>
        </section>
    )

}