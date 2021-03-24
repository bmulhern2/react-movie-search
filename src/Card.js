import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card({ title, image, type, year, id }) {
    return (
        <div>
            <div id="card">
                <h1 id="title" href={id}>{title}</h1>
                <img id="image" src={image} alt={title} />
                <h1 id="bottom">{year} | {type}</h1>
            </div>
        </div>
    )
}