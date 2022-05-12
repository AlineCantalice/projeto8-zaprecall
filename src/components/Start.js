import React from "react"
import FlashCards from "./FlashCards";

import logo from "../assets/img/logo.png";

export default function Start() {

    const [clicked, setClicked] = React.useState(false);

    return (
        <>
            {clicked ? <FlashCards /> : (<>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
                <button onClick={() => setClicked(!clicked)}>Iniciar Recall!</button>
            </>)}
        </>
    )
}