import React from "react";
import {useNavigate} from "react-router-dom";
import "../css/headerPageCss/Header.css";
import Help_me from '../images/Help_me.png';

export default function Header() {

    const navigate = useNavigate();

    function onClickRegisterHandler() {
        navigate("/signUp");
    }

    function onClickLoginHandler() {
        navigate("/signIn");
    }

    function onClickHomePage() {
        navigate("/home");
    }

    return(
        <form className={"header-container"}>
            <div>
                <button className={"header-signup-button"} onClick={onClickRegisterHandler}>Sign up</button>
            </div>
            <div>
                <button className={"header-signin-button"} onClick={onClickLoginHandler}>Sign in</button>
            </div>
            <div>
            <button className="header-home-button" onClick={onClickHomePage}>Home</button>
            </div>
            <div>
                <div>
                    <img className={"logo"} src={Help_me} alt="logo"/>
                </div>
            </div>
            <p className={"logo-text"}>Help me</p>
        </form>
    );
}