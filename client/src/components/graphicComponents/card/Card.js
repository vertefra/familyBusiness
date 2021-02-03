import React from 'react'
import './Card.css'

import imgTest from '../../../assets/cardsImages/safeHouse.png'

export const Card = ({ card }) => {
    card = {
        title: 'mock card',
        image: imgTest,
        description: 'descdkl;dfvks;lskffv;awlskfl;kfdl;aksdflkadsl;fkadsl;',
    }
    return (
        <>
            <div className="card">
                <h1>{card.title}</h1>
                <img src={card.image} />
            </div>
            <p className="cardDescription">{card.description}</p>
        </>
    )
}
