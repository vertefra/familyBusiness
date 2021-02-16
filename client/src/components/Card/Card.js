import React from 'react'
import './card.css'
const Card = ({ card, type, isOpponent, player }) => {
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
        cardToRender.back = isOpponent && 'backCard'
    }

    const opponentCard = isOpponent ? 'opponentCard' : undefined

    const handleCardClick = () => {
        if (isOpponent) {
            console.log("Can't play this card now")
            return
        }

        if (!player.playerTurn) {
            console.log('Is not your turn now')
            return
        }

        if (!player.playerDraw) {
            console.log('Need to Draw a card first')
            return
        }
    }

    return (
        <div
            className={`card card-${type} ${
                cardToRender.type && !cardToRender.back && cardToRender.type
            } ${cardToRender.color && cardToRender.color} ${
                cardToRender.back && cardToRender.back
            } ${opponentCard && opponentCard}`}
            id={card.id}
            onClick={handleCardClick}
        >
            {type === 'mobster' && (
                <div className="cardContent">
                    <header>{type} card</header>
                    <h4>{card.name}</h4>
                    <small>{card.family}</small>
                </div>
            )}
            {type === 'action' && !cardToRender.back && (
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
