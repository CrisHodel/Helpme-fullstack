import React, {ChangeEvent, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import "../css/homePageCss/HomePage.css";
// @ts-ignore
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {Post} from "../types/PostType";
import time from "../images/time.jpg";

type Props = {
    user: {id: string, name: string, img: string }
}
export default function HomePage(props: Props) {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const [answer, setAnswerValue] = useState("");
    const [selectedPlace, setSelectedPlace] = useState("");
    const [post, setPost] = useState<Post>({postId: "", title: "", userName: "", description: "" });

    const [posts, setPosts] = useState<Post[]>([]);

    const [title, setTitle] =
        useState<string>("")
    const [description, setDescription] =
        useState<string>("")

    const params = useParams();
    const id: string | undefined = params.id;

    function addPost() {
        axios.post("/api/post", {
            title: title,
            userName: props.user.name,
            description: description,
        })
            .then(() => {
                getAllPosts();
            })
            .catch((error) => console.error(error));

        setTitle("");
        setDescription("");
    }

    function getAllPosts(){
        axios.get("/api/posts" + id)
            .then(response => setPosts(response.data))
            .catch(error => console.error(error));
    }

    function handleInputChange(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        setInputValue(event.target.value);
    }
    /*function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
    }*/

    function handleAnswerChange(event: ChangeEvent<HTMLInputElement>) {
        setAnswerValue(event.target.value);
    }

    function handleSubmitAnswer(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    const handlePlaceChange = (address: string) => {
        setSelectedPlace(address);
    };

    const handlePlaceSelect = async (address: string) => {
        try {
            const results = await geocodeByAddress(address);
            const latLng = await getLatLng(results[0]);
            console.log('Selected Place:', address, latLng);
            setSelectedPlace(address);
        } catch (error) {
            console.error('Error selecting place', error);
        }
    };

    return (
        <div className="home-page" style={{ backgroundImage: `url(${time})`, height: '100vh', width: '100vw', position: 'fixed'}}>
            <div className="topic-nav">
                <div>
                    <button onClick={() => navigate('/translate')}>Translate</button>
                </div>
                <div>
                    <button onClick={() => navigate('/movingOut')}>Moving out</button>
                </div>
                <div>
                    <button onClick={() => navigate('/repair')}>Car repairs</button>
                </div>
                <div>
                    <button onClick={() => navigate('/other')}>Other</button>
                </div>
            </div>
            <div>
            <PlacesAutocomplete
                value={selectedPlace}
                onChange={handlePlaceChange}
                onSelect={handlePlaceSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }: any) => (
                    <div className="places-autocomplete">
                        <input
                            {...getInputProps({
                                placeholder: 'Ort suchen...',
                                className: 'places-input',
                            })}
                        />
                        <div className="places-suggestions">
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion: any, index: number) => (
                                <div
                                    key={index}
                                    {...getSuggestionItemProps(suggestion, { className: "suggestion-item" })}
                                >
                                    {suggestion.description}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
            </div>
            <form onSubmit={handleInputChange} className="input-form">
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    className="input-field"
                    placeholder="Titel eingeben..."
                />
                <input
                    type="text"
                    value={props.user.name}
                    disabled={true}
                    className="input-field"
                    placeholder="Benutzername eingeben..."
                />
                <textarea
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    className="input-field"
                    placeholder="Beschreibung eingeben..."
                ></textarea>
                <button style={{ color: 'black' }} onClick={addPost}>
                    Post
                </button>
                {/* Anzeige der Posts */}
                <div className="post-list">
                    {posts.map((post) => (
                        <div key={post.postId} className="post">
                            <h3>{post.title}</h3>
                            <p>{post.userName}</p>
                            <p>{post.description}</p>
                        </div>
                    ))}
                </div>
            </form>
            <form onSubmit={handleSubmitAnswer} className="answer-form">
                <input
                    type="text"
                    value={answer}
                    onChange={handleAnswerChange}
                    className="answer-field"
                    placeholder="Antwort eingeben..."
                />
                <button type="submit" className="submit-button">
                    Antworten
                </button>
            </form>
        </div>

    );
}