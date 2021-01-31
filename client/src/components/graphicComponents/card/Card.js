import React from 'react'
import './Card.css'

export const Card = ({ card }) => {
    return (
        <div className="card">
            <h1>{card.title}</h1>
            <img src={card.image} />
            <p>{card.description}</p>
        </div>
    )
}

