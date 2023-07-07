import React, { useEffect, useState } from 'react';
import { User } from '../types/UserType';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/userEditPageCss/UserEditPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faYoutube } from '@fortawesome/free-brands-svg-icons';
import avat from "../images/avat.jpg";


export default function UserEditPage() {
    const [user, setUser] = useState<User>({ id: '', name: '', password: '', img: '' });

    const params = useParams();
    const id: string | undefined = params.id;

    function getUserPageById() {
        axios
            .get('/api/user/' + id)
            .then((response) => setUser(response.data))
            .catch((error) => console.error(error));
    }

    useEffect(getUserPageById, [id]);

    return (
        <div className={'profileUserPage'}>
            <div className="imgUser" style={{ backgroundImage: `url(${avat})` }}></div>

            <div className={'userName'}>{user.name}</div>
            <div className="icon-bar">
                <a href="#" className="facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="google">
                    <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="#" className="youtube">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
            </div>
            <span className="heading">User Rating</span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <p>4.1 average based on 100 reviews.</p>
            <hr style={{ border: '3px solid #f1f1f1' }} />
        </div>
    );
}

