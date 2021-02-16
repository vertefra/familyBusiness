import React from 'react'
import { Deck } from '../../classes/Deck'
import { socket } from '../../socket'
import Card from '../Card/Card'

import './player.css'

const Player = ({ player, setPlayer, opponent, game }) => {
    const mobsters = player.mobsters
    const hand = player.hand
    const playerTurn = player.playerTurn
    const deck = game?.deck

    const handleServeCards = () => {
        if (player.playerTurn && !player.playerDraw) {
            Deck.serve(deck, player, 1)

            const syncPlayer = game.initPlayers.find(
                (p) => p.playerID === player.playerID
            )

            // Need to pass the new deck to the player inside
            // initPlayer array

            socket.emit('syncGame', game)
            setPlayer({
                ...player,
                playerDraw: true,
            })
        } else {
            console.log('Not your turn or you already draw a card')
        }
    }

    return (
        <div
            className={`player ${opponent && 'opponentPlayer'} ${
                playerTurn && 'playerTurn'
            }`}
        >
            {!opponent && (
                <div className="deck" onClick={handleServeCards}>
                    DECK
                </div>
            )}
            <div className="handCards">
                {hand.length > 0 &&
                    hand.map((card) => {
                        console.log(card)
                        return (
                            <Card
                                type="action"
                                isOpponent={opponent}
                                card={card}
                                key={card.cardID}
                                player={player}
                            />
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
                                isOpponent={opponent}
                                key={mobster.cardID}
                                player={player}
                            />
                        )
                    })}
            </div>
        </div>
    )
}

export default Player
