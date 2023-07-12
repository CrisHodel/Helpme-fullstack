import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import "../css/postPageCss/PostPage.css";
import {Answer} from "../types/AnswerType";


export default function AnswerPage() {

    const [answer, setAnswer] =
        useState<Answer>({userAnswerName: "", answerId: "" })

    const params = useParams()
    const id: string | undefined = params.id

    function getAnswerPageById() {
        axios.get("/api/answer" + id )
            .then(response => setAnswer(response.data)
            ).catch(error => console.error(error))
    }

    useEffect(getAnswerPageById,[])

    return (
        <div>
        </div>
    );
}