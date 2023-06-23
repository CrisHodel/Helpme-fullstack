import React, {ChangeEvent, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import "../css/homePageCss/HomePage.css";
// @ts-ignore
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

export default function HomePage() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const [answer, setAnswerValue] = useState("");
    const [post, setPosts] = useState<string[]>([]);
    const [selectedPlace, setSelectedPlace] = useState("");


    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value)
    }

    function handleAnswerChange(event: ChangeEvent<HTMLInputElement>) {
        setAnswerValue(event.target.value)
    }

    function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        setPosts(prevPosts => [...prevPosts, inputValue]);
        setInputValue("");
    }

    function handleSubmitAnswer(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        setAnswerValue("");
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

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div className="home-page">
            <div className="topic-nav">
                <div>
                    <button onClick={() => window.location.href = '#translate'}>Translate</button>
                </div>
                <div>
                    <button onClick={() => window.location.href = '#moving out'}>Moving out</button>
                </div>
                <div>
                    <button onClick={() => window.location.href = '#car repair'}>Car repairs</button>
                </div>
                <div>
                    <button onClick={() => window.location.href = '#other'}>Other</button>
                </div>
            </div>
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
            <form onSubmit={handleSubmit} className="input-form">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Schreibe etwas oder stelle eine Frage..."
                />
                <button type="submit" className="submit-button">Post</button>
            </form>
            <div className="posts">
                {post.map((post, index) => (
                    <div key={index} className="post">
                        {post}
                    </div>
                ))}
                <input type="text" className="answer" value={answer} onChange={handleAnswerChange} />


            </div>

        </div>
    );

}

