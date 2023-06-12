import React from "react";
import {useNavigate} from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();

    function onClickHandlerRegisterHandler() {
        navigate("/register");
    }

    function onClickLoginRegisterHandler() {
        navigate("/login");
    }

    return(
        <div>
            <button onClick={onClickHandlerRegisterHandler}>Register</button>
        </div>
    );
}