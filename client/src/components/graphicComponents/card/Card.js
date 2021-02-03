import React from 'react'
import './Card.css'

import mobster from '../../../assets/img/mobster.png'

export const Card = ({ card }) => {
    let addictionalClass

    if (card.title === 'Mobster Card') {
        card.image = mobster
        addictionalClass = `mobster-${card.color}`
    }
    return (
        <>
            <div className={`card ${addictionalClass}`}>
                <h1>
                    {card.title === 'Mobster Card'
                        ? `${card.gangsterName}`
                        : `${card.title}`}
                </h1>
                <img src={card.image} />
            </div>
            <p className="cardDescription">{card.description}</p>
        </>
    )
}
