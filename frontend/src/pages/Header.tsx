import React from "react";
import {useNavigate} from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();

    function onClickHandlerRegisterHandler() {
        navigate("/signUp");
    }

    function onClickLoginRegisterHandler() {
        navigate("/signIn");
    }

    return(
        <div>
            <button onClick={onClickHandlerRegisterHandler}>Sign up</button>
            <button onClick={onClickLoginRegisterHandler}>Sign in</button>
        </div>
    );
}