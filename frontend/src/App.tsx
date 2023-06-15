import React from 'react';
import HomePage from "./pages/HomePage";
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RegisterPage from "./pages/RegisterPage";
import Header from "./pages/Header";
import LoginPage from "./pages/LoginPage";
import useUser from "./hooks/useUser";


function App() {

    const {login, user} = useUser()

    return (
        <Router>
            <div className="App">
                <header><Header/></header>
                    <Routes>
                        <Route path={"/signUp"} element={<RegisterPage/>}/>
                        <Route path="/" element={<HomePage />} />
                        <Route path={"/signIn"} element={<LoginPage login={login}/>}/>
                    </Routes>
            </div>
        </Router>
    );
}

export default App;
