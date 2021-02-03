import './player.css'

import React from 'react'
import Family from './Family'
import Hand from './Hand'

const Player = () => {
    return (
        <div className="player">
            <Family />
            <Hand />
        </div>
    )
}

export default Player
