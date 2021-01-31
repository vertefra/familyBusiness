import React, { useState } from 'react'
import './board.css'
import Cemetery from './cemetery/Cemetery'
import List from './list/List'
import Wall from './wall/Wall'
import { Game } from '../../classes/Game'

const game = new Game()

export const Board = () => {
    const [currentGame, updateGame] = useState(game)

    const handleStartNewGame = (e) => {
        
        currentGame.createDeck()
        const card = currentGame.gameDeck.pop()
        // Aggiungo la carta tolta dal mazzo in cimitero
        // usando hook updateGame che trigger il rerender
        // del DOM
        updateGame({
            ...currentGame,
            cemetery: [...currentGame.cemetery, card]
        })
    }

    return (
        <div>
            <h1>Family business board</h1>
            <button onClick={handleStartNewGame}>New Game</button>
            <Wall />
            <List list={game.list} />
            <Cemetery cemetery={currentGame.cemetery} />
        </div>
    )
}
