import React from 'react'
import './Card.css'

const Card = ({ card }) => {
    return (
        <div className="card" style={{ border: '1px solid black' }}>
            <h1>{card.title}</h1>
            <img src={card.image} />
            <p>{card.description}</p>
        </div>
    )
}

export default Card
