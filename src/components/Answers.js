export default function Answers({answer}){
    return (
        <>
            <p>{answer}</p>
            <div className="buttons">
                <button className="red-button">Não lembrei</button>
                <button className="orange-button">Quase não lembrei</button>
                <button className="green-button">Zap!</button>
            </div>
        </>
    )
}