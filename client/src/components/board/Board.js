import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

<<<<<<< HEAD
import { Game } from '../../classes/Game'

import Cemetery from './cemetery/Cemetery'
import List from './list/List'
import Wall from './wall/Wall'
import ActivePlayers from './activePlayers/ActivePlayers'
import Player from './Player/Player'

import './board.css'

=======
import './board.css'
import Cemetery from './cemetery/Cemetery'
import List from './list/List'
import Wall from './wall/Wall'
import { Game } from '../../classes/Game'
import ActivePlayers from './activePlayers/ActivePlayers'
import Player from './Player/Player'

>>>>>>> 76c6145d111c5b8211a6a1d1b38f5511677e6b56
export const Board = () => {
    const [numberOfPlayers, setNumberOfPlayers] = useState(3)
    // TODO: save uuid in localStorage and load from it
    const [playerID, setPlayerID] = useState(uuidv4())
    const [currentGame, updateGame] = useState({
        list: [],
        cemetery: [],
        players: [],
    })

    const handleStartNewGame = (e) => {
        const game = new Game({ numberOfPlayers })
        if (game.assignPlayer(playerID)) {
            updateGame(game)
        } else {
            throw Error('All players already assigned')
        }
    }

    const handlePLayerUpdate = (e) => {
        if (e.target.value < 3) {
            setNumberOfPlayers(3)
            return
        }

        if (e.target.value > 6) {
            setNumberOfPlayers(6)
            return
        }

        setNumberOfPlayers(e.target.value)
    }

    return (
        <div className="wrapper">
            <h1>Family business board</h1>
            <div className="controllBar">
                <button onClick={handleStartNewGame}>New Game</button>
                <label htmlFor="nOfPlayers">Number Of PLayers</label>
                <input
                    type="number"
                    id="nOfPlayers"
                    value={numberOfPlayers}
                    onChange={handlePLayerUpdate}
                />
            </div>
            <div className="activePlayers">
                <ActivePlayers />
            </div>
            <div className="executionList">
                <Wall />
                <List list={currentGame.list} />
            </div>
            <div className="cemeteryContainer">
                <Cemetery cemetery={currentGame.cemetery} />
            </div>
            <div>
                <Player game={currentGame} playerID={playerID} />
            </div>
        </div>
    )
}
