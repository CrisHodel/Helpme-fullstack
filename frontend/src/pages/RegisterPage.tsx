import axios from "axios";
import React, {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Simulate} from "react-dom/test-utils";
import "../css/registerPageCss/RegisterPage.css"


export default function RegisterPage(){

    const navigate = useNavigate();

    const [name,  setName] = useState<string>("");

    const [password, setPassword] = useState<string>("");

    function addUser(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log(name)
        axios.post("/api/signUp/user", {
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
        setName(event.target.value)
    }

    function changeEventHandlerUserPassword(event: ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }

    return(
        <div className={"registerPage"}>
                <form onSubmit={addUser}>
                    <div className={"registerPage"}>
                        <label htmlFor="Username"><b>Username</b></label>
                            <input placeholder={"Username"} type="text" value={name} onChange={changeEventHandlerUserName}/></div>
                    <div>
                        <label htmlFor="Password"><b>Password</b></label>
                            <input placeholder={"Password"} type="password" value={name} onChange={changeEventHandlerUserPassword} required/>
                    </div>
                    <div>
                        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                            <input placeholder={"Repeat Password"} type="password" value={name} onChange={changeEventHandlerUserPassword} required/>
                    </div>
                        <label>
                            <input type="checkbox" checked={true} name="remember" /> Remember me
                        </label>
                    <div className="clearfix">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <button type="submit" className="signupbtn">Sign Up</button>
                    </div>
                </form>
        </div>
    );
}