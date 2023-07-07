import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/otherPageCss/OtherPage.css';
import other from "../images/other.jpg";

export default function OtherPage() {
    const navigate = useNavigate();

    return (
        <div className={"other-page-container"} style={{ backgroundImage: `url(${other})`, height: '100vh', width: '100vw', position: 'fixed'}}>
            <div className="other-page-content">
                <div>
                    <a href="/home" className="previous-button round">
                        &#8249;
                    </a>
                </div>
            </div>
        </div>
    );
}
