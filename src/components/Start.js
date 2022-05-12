import React from "react"
import FlashCards from "./FlashCards";

export default function Start() {

    const [clicked, setClicked] = React.useState(false);

    return (
        <>
            {clicked ? <FlashCards /> : (<>
                <img src="/assets/img/logo.png" alt="logo" />
                <h1>ZapRecall</h1>
                <button onClick={() => setClicked(!clicked)}>Iniciar Recall!</button>
            </>)}
        </>
    )
}