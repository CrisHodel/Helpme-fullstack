import React from "react";
import {useNavigate} from "react-router-dom";
import "../css/headerPageCss/Header.css";

export default function Header() {

    const navigate = useNavigate();

    function onClickHandlerRegisterHandler() {
        navigate("/signUp");
    }

    function onClickLoginRegisterHandler() {
        navigate("/signIn");
    }

    function onClickHomePage() {
        navigate("/home");
    }

    return(
        <form className={"header-container"}>
            <div>
                <button className={"header-signup-button"} onClick={onClickHandlerRegisterHandler}>Sign up</button>
            </div>
            <div>
                <button className={"header-signin-button"} onClick={onClickLoginRegisterHandler}>Sign in</button>
            </div>
            <div>
            <button className="header-home-button" onClick={onClickHomePage}>Home</button>
            </div>
        </form>
    );
}