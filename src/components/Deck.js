import FlashCard from "./FlashCard"

export default function Deck({ deck, updateProgress }){

    return (
        <>
            {deck.map((flashcard, index) => <FlashCard flashcard={flashcard} index={index} updateProgress={updateProgress} key={index} />)}
        </>
    )

}