import axios from "axios";
import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "../css/registerPageCss/RegisterPage.css"
import time from "../images/time.jpg";


export default function RegisterPage(){

    const navigate = useNavigate();

    const [name,  setName] = useState<string>("");

    const [password, setPassword] = useState<string>("");


    function addUser(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        console.log(name)
        axios.post("/api/signUp", {
            name: name,
            password: password
        })
            .then(response => {
                navigate('/user/' + response.data.id)
            }).catch(error => console.error(error))
        setName("")
        setPassword("")
    }


    function changeEventHandlerUserName(event: ChangeEvent<HTMLInputElement>){
        console.log(name);
        setName(event.target.value)
    }

    function changeEventHandlerUserPassword(event: ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }

    return(
        <div>
        <div className={"registerPage"} style={{ backgroundImage: `url(${time})`, height: '100vh', width: '100vw', position: 'fixed'}}>
                <form onSubmit={addUser}>
                    <div>
                        <label><b>Username</b></label>
                            <input placeholder={"Username"} type="text" value={name} onChange={changeEventHandlerUserName}/>
                    </div>
                    <div>
                        <label><b>Password</b></label>
                            <input placeholder={"Password"} type="password" value={password} onChange={changeEventHandlerUserPassword}/>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" defaultChecked name="remember" /> Remember me
                        </label>
                    </div>
                    <div className="clearfix">
                        <button type="submit" className="signupbtn">Sign Up</button>
                        <button type="button" className="cancelbtn">Cancel</button>
                    </div>
                </form>
        </div>
        </div>
    );
}