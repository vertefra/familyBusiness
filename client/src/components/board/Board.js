import React from 'react'
import './board.css'
import Cemetery from './cemetery/Cemetery'
import List from './list/List'
import Wall from './wall/Wall'
import ActivePlayer from './activePlayer/ActivePlayer'
import { Game } from '../../classes/Game'
import { Contract } from '../../classes/AttackCards'
import Card from '../graphicComponents/card/Card'

const Board = () => {
    let game
    const handleStartNewGame = () => {
        const game = new Game()
    }

    const contract = new Contract()

    return (
        <div>
            <h1>Family business board</h1>
            <button onClick={handleStartNewGame}>New Game</button>
            <Wall />
            <List />
            <Cemetery />
            {game?.players.map((player) => {
                return <ActivePlayer player={player} />
            })}
            <Card card={contract}/>
        </div>
    )
}

export default Board
