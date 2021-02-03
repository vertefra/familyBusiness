import React, { useState } from 'react'
import './board.css'
import Cemetery from './cemetery/Cemetery'
import List from './list/List'
import Wall from './wall/Wall'
import { Game } from '../../classes/Game'
import ActivePlayers from './activePlayers/ActivePlayers'
import Player from './Player/Player'

const game = new Game()

export const Board = () => {
    const [currentGame, updateGame] = useState(game)

    const handleStartNewGame = (e) => {
        currentGame.createDeck()
        const card = currentGame.gameDeck.pop()

        updateGame({
            ...currentGame,
            cemetery: [...currentGame.cemetery, card],
        })
    }

    return (
        <div className="wrapper">
            <h1>Family business board</h1>
            <button onClick={handleStartNewGame}>New Game</button>
            <div className="activePlayers">
                <ActivePlayers />
            </div>
            <div className="executionList">
                <Wall />
                <List list={game.list} />
            </div>
            <div className="cemeteryContainer">
                <Cemetery cemetery={currentGame.cemetery} />
            </div>
            <div>
                <Player />
            </div>
        </div>
    )
}
