import React from 'react';
import HomePage from "./pages/HomePage";
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RegisterPage from "./pages/RegisterPage";
import Header from "./pages/Header";

function App() {
    return (
        <Router>
            <div className="App">
                <header><Header/></header>
                    <Routes>
                        <Route path={"/signUp"} element={<RegisterPage/>}/>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
            </div>
        </Router>
    );
}

export default App;
