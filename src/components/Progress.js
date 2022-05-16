export default function Progress({ flashcardNumber, answeredFlashcards, icons }){
    return (
        <section className="footer footer-end-recall footer-end">
            <p>{answeredFlashcards}/{flashcardNumber} CONCLUÍDOS</p>

            <div className="icons">
                {icons.map((icon, index) => <ion-icon name={icon} key={index}> </ion-icon>)}
            </div>
        </section>
    )
}