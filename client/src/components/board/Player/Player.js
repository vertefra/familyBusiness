import './player.css'

import React, { useState } from 'react'
import Family from './Family'
import Hand from './Hand'

const Player = ({ game }) => {
    let player = {
        mobsterCards: [],
    }

    if (game.gameState === 'started') {
        console.log(game)
        const currentPlayer = game.players.find((p) => p.userID === game.userID)
        player = currentPlayer
    }

    return (
        <div className="player">
            <Family mobsters={player.mobsterCards} />
            <Hand />
        </div>
    )
}

export default Player
