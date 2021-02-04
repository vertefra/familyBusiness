import React, { useState } from 'react'
import { socket } from '../../socketio'
import { v4 as uuidv4 } from 'uuid'
import './setup.css'

const Setup = () => {
    const [gamesList, updateGameList] = useState({
        activeGames: {},
    })
    const [game, setGame] = useState({
        gameID: '',
        gameName: 'New Game',
        numberOfPlayers: 3,
    })

    // Listening for new games
    socket.on('newGameAdded', (game) => {
        console.log("I've got a new gmae")
        updateGameList(game)
    })

    const handleChange = (e) => {
        setGame({
            ...game,
            [e.target.id]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const gameID = uuidv4()
        game.gameID = gameID
        console.log('Emitting new event')
        socket.emit('addNewGame', game)
    }

    const { activeGames } = gamesList

    return (
        <div className="setup">
            <div className="openGamesList">
                <h1>Open Games</h1>
                {Object.keys(activeGames).length > 0 &&
                    Object.keys(activeGames).map((gameID) => {
                        const game = activeGames[gameID]
                        return <div id={game.gameID}>{game.gameName}</div>
                    })}
            </div>
            <div className="createGame">
                <h1>Host a game</h1>
                <div className="inputField">
                    <label htmlFor="gameName">Game Name</label>
                    <input
                        type="text"
                        id="gameName"
                        value={game.gameName}
                        onChange={handleChange}
                    ></input>
                </div>
                <div className="inputField">
                    <label htmlFor="numberOfPlayers">Number of Players</label>
                    <input
                        type="text"
                        id="numberOfPlayers"
                        value={game.numberOfPlayers}
                        onChange={handleChange}
                    ></input>
                </div>
                <input
                    type="submit"
                    value="create new game"
                    onClick={handleSubmit}
                />
            </div>
        </div>
    )
}

export default Setup
