import React from 'react'
import './card.css'
const Card = ({ card, type }) => {
    const cardToRender = {}

    if (type === 'mobster') {
        cardToRender.id = card.cardID
        cardToRender.name = card.name
        cardToRender.fmily = card.familyName
        cardToRender.color = card.color
    }

    if (type === 'action') {
        cardToRender.id = card.cardID
        cardToRender.name = card.name
        cardToRender.description = card.description
        cardToRender.type = card.type
    }

    console.log(cardToRender, card)

    return (
        <div
            className={`card card-${type} ${card.color} ${card.type}`}
            id={card.id}
        >
            {type === 'mobster' && (
                <div className="cardContent">
                    <header>{type} card</header>
                    <h4>{card.name}</h4>
                    <small>{card.family}</small>
                </div>
            )}
            {type === 'action' && (
                <div className="cardContent">
                    <header>{type} card</header>
                    <h4 className="actionCardName">{card.name}</h4>
                    <small className="cardDescription">
                        {card.description}
                    </small>
                </div>
            )}
        </div>
    )
}

export default Card
