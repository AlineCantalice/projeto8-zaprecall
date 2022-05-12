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
            <div className="conteiner-flashcards">
            </div>
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