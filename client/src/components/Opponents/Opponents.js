import React from 'react'
import Player from '../Player/Player'

import './opponents.css'

const Opponents = ({ opponents }) => {
    return (
        <div className="opponents">
            {opponents.length &&
                opponents.map((p) => {
                    return <Player opponent={true} player={p} />
                })}
        </div>
    )
}

export default Opponents
