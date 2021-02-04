import React, { useState } from 'react'
import { socket } from '../../socketio'
import { v4 as uuidv4 } from 'uuid'
import './setup.css'

const Setup = ({ history }) => {
    const [gamesList, updateGameList] = useState({
        activeGames: {},
    })
    const [game, setGame] = useState({
        gameID: '',
        gameName: 'New Game',
        numberOfPlayers: 3,
    })

    // Listening for new games
    socket.on('newGameAdded', (newGame) => {
        console.log("I've got a new game!")
        // Check if between the active game there is the game created
        // if so it means I created the game and will redirect
        // to the game page
        const { activeGames } = newGame
        if (Object.keys(activeGames).includes(game.gameID)) {
            history.push(`/game/${game.gameID}`)
        } else {
            updateGameList(newGame)
        }
    })

    // Listening for confirmation of joining a game
    socket.on('gameJoined', (gameID) => {
        history.push(`/game/${gameID}`)
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
        setGame(game)
        socket.emit('addNewGame', game)
    }

    const handleSelectGame = (e) => {
        const gameID = e.target.id
        socket.emit('joinGame', gameID)
    }

    const { activeGames } = gamesList

    return (
        <div className="setup">
            <div className="openGamesList">
                <h1>Open Games</h1>
                {Object.keys(activeGames).length > 0 &&
                    Object.keys(activeGames).map((gameID) => {
                        const game = activeGames[gameID]
                        return (
                            <div
                                key={game.gameID}
                                id={game.gameID}
                                className="gameSelector"
                                onClick={handleSelectGame}
                            >
                                {game.gameName}
                                <div
                                    className={`gameStatus-${
                                        game.isFull ? 'close' : 'open'
                                    }`}
                                >
                                    {game.isFull ? 'close' : 'open'}
                                </div>
                            </div>
                        )
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
