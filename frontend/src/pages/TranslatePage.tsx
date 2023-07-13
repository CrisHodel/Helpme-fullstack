import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/footerPageCss/Footer.css';
import '../css/translatePageCss/TranslatePage.css';
import trans from "../images/trans.jpg";

export default function TranslatePage() {
    const navigate = useNavigate();

    return (
        <div className={"translate-page-container"} style={{ backgroundImage: `url(${trans})`, height: '100vh', width: '100vw', position: 'fixed'}}>
            <div className="translate-page-content">
                <div>
                    <a href="/home" className="previous-button round">
                        &#8249;
                    </a>
                </div>
            </div>
        </div>
    );
}
