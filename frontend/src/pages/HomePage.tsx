import React, {ChangeEvent, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import "../css/homePageCss/HomePage.css";
// @ts-ignore
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {Post} from "../types/PostType";

export default function HomePage() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const [answer, setAnswerValue] = useState("");
    const [selectedPlace, setSelectedPlace] = useState("");
    const [post, setPost] = useState<Post>({title: "", description: "", userName: "", postId: "" });


    const [title, setTitle] =
        useState<string>("")
    const [description, setDescription] =
        useState<string>("")
    const [userName, setUserName] =
        useState<string>("")

    const params = useParams();
    const id: string | undefined = params.id;

    function addPost() {
        axios.post("/api/post", {
            title: title,
            description: description,
            userName: userName,
        }).catch(error => console.error(error))
        setTitle("")
        setDescription("")
        setUserName("")
        console.log('post:', post); // Überprüfe hier den Wert von post
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    function handleAnswerChange(event: ChangeEvent<HTMLInputElement>) {
        setAnswerValue(event.target.value);
    }

    function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        // Handle form submission
    }

    function handleSubmitAnswer(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        // Handle answer submission
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


    useEffect(() => {
    axios.get("/api/post/" + id)
        .then(response => setPost(response.data))
        .catch(error => console.error(error));
    }, [id]);

    return (
        <div className="home-page">
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
            <form onSubmit={handleSubmit} className="input-form">
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    className="input-field"
                    placeholder="Titel eingeben..."
                />
                <input
                    type="text"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
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