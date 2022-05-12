export default function FlashCards() {

    function Header() {
        return (
            <div className="header">
                <img src="/assets/img/logo-pequeno.png" />
                <h1>ZapRecall</h1>
            </div>
        )
    }

    function Conteiner() {
        return (
            <ul className="conteiner-flashcards">
                <li>
                    <div className="questions">
                        <p>Pergunta 1</p>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                </li>
            </ul>
        )
    }

    function Footer() {
        return (
            <div className="footer">
                <p>0/4 CONCLUÍDOS</p>
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