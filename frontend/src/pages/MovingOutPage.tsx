import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/movingOutPageCss/MovingOutPage.css';
import move from "../images/move.jpg";
import trans from "../images/trans.jpg";

export default function MovingOutPage() {
    const navigate = useNavigate();

    return (
        <div className="movingOut-page-container" style={{ backgroundImage: `url(${move})`, height: '100vh', width: '100vw', position: 'fixed'}}>
            <div className="movingOut-page-content">
                <div>
                    <a href="/home" className="previous-button round">
                        &#8249;
                    </a>
                </div>
            </div>
        </div>
    );
}
