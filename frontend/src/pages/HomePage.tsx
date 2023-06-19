import React, {ChangeEvent, useState} from 'react';
import {useNavigate} from "react-router-dom";
import "../css/homePageCss/HomePage.css";

export default function HomePage(){

    const navigate = useNavigate();

    const[inputValue, setInputValue] = useState("");

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        setInputValue(event.target.value)
    }
    function handleSubmit(event: ChangeEvent<HTMLFormElement>){
        console.log("Eingabe" + inputValue)
        event.preventDefault()
        setInputValue("");
    }

    return(
        <div className="topic-nav">
            <div>
            <button onClick={() => window.location.href = '#translate'}>Translate</button>
            </div>
            <div><button onClick={() => window.location.href = '#moving out'}>Moving out</button>
            </div>
            <div><button onClick={() => window.location.href = '#car repair'}>Car repairs</button>
            </div>
            <div><button onClick={() => window.location.href = '#other'}>Other</button>
            </div>
            <form onSubmit={handleSubmit} >
                <input
                    className={"input"}
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Schreibe etwas oder stelle eine Frage..."
                />
                <button type="submit">Senden</button>
            </form>
        </div>
    )
}