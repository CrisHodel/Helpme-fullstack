import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/footerPageCss/Footer.css';
import '../css/translatePageCss/TranslatePage.css';
import auto from "../images/auto.jpg";

export default function TranslatePage() {
    const navigate = useNavigate();

    return (
        <div className={"car-page-container"} style={{ backgroundImage: `url(${auto})`, height: '100vh', width: '100vw', position: 'fixed'}}>
            <div className="car-page-content">
                <div>
                    <a href="/home" className="previous-button round">
                        &#8249;
                    </a>
                </div>
            </div>
        </div>
    )
}