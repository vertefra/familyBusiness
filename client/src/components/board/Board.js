import React from 'react'
import './board.css'
import Cemetery from './cemetery/Cemetery'
import List from './list/List'
import Wall from './wall/Wall'
import ActivePlayer from './activePlayer/ActivePlayer'

const Board = () => {

    



    const handleStartNewGame = () => {
        const game = new Game()
    }     

    return (
        <div>
            <h1>Family business board</h1>
            <button onClick={handleStartNewGame}>New Game</button>
            <Wall />
            <List />
            <Cemetery />
            {game.players.map((player) => {
                return <ActivePlayer player={player} />
            })}
        </div>
    )
}

export default Board
