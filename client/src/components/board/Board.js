import React from 'react'
import activePlayer from './activePlayer/activePlayer'
import './board.css'
import Cemetery from './cemetery/Cemetery'
import List from './list/List'
import Wall from './wall/Wall'

const Board = () => {
    const players = [] // Qua ci saranno le instances della player class

    return (
        <div>
            <h1>Family business board</h1>
            <Wall />
            <List />
            <Cemetery />
            {players.map((player) => {
                return <activePlayer player={player} />
            })}
        </div>
    )
}

export default Board
