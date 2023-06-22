import React, {ChangeEvent, useState} from 'react';
import {useNavigate} from "react-router-dom";
import "../css/homePageCss/HomePage.css";

export default function HomePage(){

    const navigate = useNavigate();

    const[inputValue, setInputValue] = useState("");
    const[answer, setAnswerValue] = useState("");
    const[post, setPosts] = useState<string[]>([]);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        setInputValue(event.target.value)
    }

    function handleAnswerChange(event: ChangeEvent<HTMLInputElement>){
        setAnswerValue(event.target.value)
    }

    function handleSubmit(event: ChangeEvent<HTMLFormElement>){
        console.log("Eingabe" + inputValue)
        event.preventDefault()
        setPosts(prevPosts => [...prevPosts, inputValue]);
        setInputValue("");
    }

    function handleSubmitAnswer(event: ChangeEvent<HTMLFormElement>){
        console.log("Eingabe" + answer)
        event.preventDefault()
        setAnswerValue("");
    }

    return(
        <div className="home-page">
            <div className="topic-nav">
            <div>
                <button onClick={() => window.location.href = '#translate'}>Translate</button>
            </div>
            <div>
                <button onClick={() => window.location.href = '#moving out'}>Moving out</button>
            </div>
            <div>
                <button onClick={() => window.location.href = '#car repair'}>Car repairs</button>
            </div>
            <div>
                <button onClick={() => window.location.href = '#other'}>Other</button>
            </div>
            </div>
            <form onSubmit={handleSubmit} className={"input-form"}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className={"input-field"}
                    placeholder="Schreibe etwas oder stelle eine Frage..."
                />
                <button type="submit" className={"submit-button"}>Post</button>
            </form>
                <div className="posts">
                    {post.map((post, index) => (
                        <div key={index} className="post">
                            {post}
                        </div>
                    ))}
            < input type="text-answer" value={answer} onChange={handleAnswerChange} />
        </div>
        </div>
    )
}