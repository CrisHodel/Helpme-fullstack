import React, {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import "../css/loginPageCss/LoginPage.css";
import time from "../images/time.jpg";

type Props = {
    login: (username: string, password: string) => Promise<void>
}

export default function LoginPage(props: Props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function loginOnSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        props.login(username, password)
            .then(() => {
                navigate("/home"); // Navigiere zur Benutzerseite
            })
            .catch(error => {
                console.error(error);
            });
    }

    function changeHandlerUserName(event: ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
        console.log(username)
    }

    function changeHandlerPassword(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    return (
        <div className="signInPage" style={{ backgroundImage: `url(${time})`, height: '100vh', width: '100vw', position: 'fixed'}}>
            <form onSubmit={loginOnSubmit}>
                <div>
                    <label><b>Username</b></label>
                    <input placeholder="Username" type="text" value={username} onChange={changeHandlerUserName} />
                </div>
                <div>
                    <label><b>Password</b></label>
                    <input placeholder="Password" type="password" value={password} onChange={changeHandlerPassword} />
                </div>
                <label>
                    <input type="checkbox" defaultChecked name="remember" /> Remember me
                </label>
                <div className="form-buttons">
                    <button type="submit" className="submit">Sign In</button>
                    <button type="button" className="cancelbtn">Cancel</button>
                </div>
                <span className="psw">Forgot <a href="#">password?</a></span>
            </form>
        </div>
    );
}
