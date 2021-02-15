import React from 'react'
import Card from '../Card/Card'

import './player.css'

const Player = ({ player }) => {
    const mobsters = player.mobsters
    const hand = player.hand

    return (
        <div className="player">
            <div className="handCards">
                {hand.length > 0 &&
                    hand.map((card) => {
                        console.log(card)
                        return (
                            <Card type="action" card={card} key={card.cardID} />
                        )
                    })}
            </div>
            <div className="mobsterCards">
                {mobsters.length > 0 &&
                    mobsters.map((mobster) => {
                        return (
                            <Card
                                type="mobster"
                                card={mobster}
                                key={mobster.cardID}
                            />
                        )
                    })}
            </div>
        </div>
    )
}

export default Player
