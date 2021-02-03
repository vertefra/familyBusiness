import './player.css'

import React from 'react'
import Family from './Family'
import Hand from './Hand'

const Player = ({ game, playerID }) => {
    const { players } = game

    const currentPlayer = players.find((p) => p.playerID === playerID)

    return (
        <div className="player">
            {currentPlayer && <Family mobsters={currentPlayer.mobsterCards} />}
            <Hand />
        </div>
    )
}

export default Player
