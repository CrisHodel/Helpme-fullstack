import React, {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Simulate} from "react-dom/test-utils";
import "../css/loginPageCss/LoginPage.css"

type Props = {
    login: (username: string, password: string) => Promise<void>
}

export default function LoginPage(props: Props){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function loginOnSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        props.login(username, password)
            .then(() => {
                navigate(("/home"))
            })
            .catch(error => {console.error()});
    }

    function changeHandlerUserName(event: ChangeEvent<HTMLInputElement>){
        setUsername(event.target.value)
    }

    function changeHandlerPassword(event: ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }

    return(
        <div className={"signInPage"}>
            <form onSubmit={loginOnSubmit}>
                <div className={"signInPage"}>
                    <label><b>Username</b></label>
                    <input placeholder={"UserName"} type="text" onChange={changeHandlerUserName}/>
                    <div/>
                        <div>
                            <label><b>Password</b></label>
                                <input placeholder={"Password"} type="text" onChange={changeHandlerPassword}/>
                        </div>
                    <div>
                        <button>Submit</button>
                    <label>
                       <input type={"checkbox"} checked={false} name={"remember"}/> Remember me
                    </label>
                    </div>
                </div>
            </form>
            <div className="signInPage">
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
        </div>
    )
}
