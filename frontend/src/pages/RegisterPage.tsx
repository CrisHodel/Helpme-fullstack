import axios from "axios";
import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "../css/registerPageCss/RegisterPage.css"


export default function RegisterPage(){

    const navigate = useNavigate();

    const [name,  setName] = useState<string>("");

    const [password, setPassword] = useState<string>("");

    const [registrationSuccess, setRegistrationSuccess] = useState<boolean>(false);


    function addUser(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
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
        console.log(name);
        setName(event.target.value)
    }

    function changeEventHandlerUserPassword(event: ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }

    return(
        <div className={"registerPage"}>
                <form onSubmit={addUser}>
                    <div>
                        <label htmlFor="Username"><b>Username</b></label>
                            <input placeholder={"Username"} type="text" value={name} onChange={changeEventHandlerUserName}/>
                    </div>
                    <div>
                        <label htmlFor="Password"><b>Password</b></label>
                            <input placeholder={"Password"} type="password" value={password} onChange={changeEventHandlerUserPassword}/>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" defaultChecked name="remember" /> Remember me
                        </label>
                    </div>
                    <div className="clearfix">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <button type="submit" className="signupbtn">Sign Up</button>
                    </div>
                </form>
            {registrationSuccess && <p>You are registered!</p>}
        </div>
    );
}