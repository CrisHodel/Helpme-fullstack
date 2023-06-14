import axios from "axios";
import React, {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


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
            <div className={"registerForm"}>
                <form onSubmit={addUser}>
                    <div>
                        <input placeholder={"Name"} type="text" value={name} onChange={changeEventHandlerUserName}/>
                    </div>
                <div>
                    <input placeholder={"Password"} type="password" value={name} onChange={changeEventHandlerUserPassword}/>
                </div>
                    <div>
                        <button type="submit">Sign up</button>
                    </div>
                </form>
            </div>

        </div>
    );
}