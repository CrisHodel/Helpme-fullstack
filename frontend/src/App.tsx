import React from 'react';
import HomePage from "./pages/HomePage";
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RegisterPage from "./pages/RegisterPage";
import Header from "./pages/Header";
import LoginPage from "./pages/LoginPage";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import FooterPage from "./pages/Footer";
import UserEditPage from "./pages/UserEditPage";
import TranslatePage from "./pages/TranslatePage";
import PostPage from "./pages/TranslatePage";
import useUser from "./hooks/useUser";
import MovingOutPage from "./pages/MovingOutPage";
import CarPage from "./pages/CarPage";


function App() {

    const {login, user} = useUser()

    return (
        <Router>
            <div className="App">
                <header><Header/></header>
                    <Routes>
                        <Route path={"/signUp"} element={<RegisterPage/>}/>

                        <Route element={<ProtectedRoutes user={user?.name}/>}>

                        </Route>
                        <Route path={"/signIn"} element={<LoginPage login={login}/>}/>
                        <Route path="/home" element={<HomePage user = {user}/>} />
                        <Route path="/translate" element={<TranslatePage />} />
                        <Route path="/movingOut" element={<MovingOutPage />} />
                        <Route path="/repair" element={<CarPage />} />
                        <Route path={`/user/:id`} element={<UserEditPage/>}/>
                        <Route path={`/post/:id`} element={<PostPage/>}/>

                    </Routes>
                <header><FooterPage/></header>
            </div>
        </Router>
    );
}

export default App;
