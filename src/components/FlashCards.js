import Questions from "./Questions"

export default function FlashCards() {

    function Header() {
        return (
            <div className="header">
                <img src="/assets/img/logo-pequeno.png" alt="logo-pequeno" />
                <h1>ZapRecall</h1>
            </div>
        )
    }

    function Conteiner() {
        return (
            <ul className="conteiner-flashcards">
                <Questions counter={1}/>
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