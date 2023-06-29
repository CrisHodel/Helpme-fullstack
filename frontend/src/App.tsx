import React from 'react';
import HomePage from "./pages/HomePage";
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RegisterPage from "./pages/RegisterPage";
import Header from "./pages/Header";
import LoginPage from "./pages/LoginPage";
import useUser from "./hooks/useUser";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import FooterPage from "./pages/Footer";
import UserEditPage from "./pages/UserEditPage";
import TranslatePage from "./pages/TranslatePage";
import PostPage from "./pages/TranslatePage";


function App() {

    const {login, user} = useUser()

    return (
        <Router>
            <div className="App">
                <header><Header/></header>
                    <Routes>
                        <Route path={"/signUp"} element={<RegisterPage/>}/>

                        <Route element={<ProtectedRoutes user={user}/>}>

                        </Route>
                        <Route path={"/signIn"} element={<LoginPage login={login}/>}/>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/translate" element={<TranslatePage />} />
                        <Route path={`/user/:id`} element={<UserEditPage/>}/>
                        <Route path={`/post/:id`} element={<PostPage/>}/>

                    </Routes>
                <header><FooterPage/></header>
            </div>
        </Router>
    );
}

export default App;
