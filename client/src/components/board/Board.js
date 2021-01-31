import React from 'react'
import './board.css'
import Cemetery from './cemetery/Cemetery'
import List from './list/List'
import Wall from './wall/Wall'
import { Game } from '../../classes/Game'

export const Board = () => {
    const game = new Game()

    const handleStartNewGame = (e) => {
        console.log('clicked')
        game.createDeck()
        console.log(game.gameDeck)
    }

    return (
        <div>
            <h1>Family business board</h1>
            <button
                onClick={handleStartNewGame}
            >
                New Game
            </button>
             <Wall />
            <List />
        <Cemetery />
        </div>
    )
}
