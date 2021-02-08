import React, { useEffect, useState } from 'react'
import { v4 as uuid4 } from 'uuid'
import { socket } from '../../socket.js'
import './setup.css'

const Setup = ({ history }) => {
    const [userID, setUserID] = useState('')
    const [activeGamesList, updateActiveGamesList] = useState({})
    const [game, setGame] = useState({
        gameID: '',
        gameName: 'New Game',
        numberOfPlayers: 3,
    })
    // Socket Listeners
    socket.on('handshake', ({ userID, activeGames }) => {
        console.log('welcome => ', userID)
        setUserID(userID)
        updateActiveGamesList({ ...activeGames })
    })

    socket.on('newGameAdded', (activeGames) => {
        console.log('new game added: ')
        console.log('Active games list: ', activeGames)
        updateActiveGamesList({ ...activeGames })
    })

    const handleChange = (e) => {
        setGame({
            ...game,
            [e.target.id]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        game.gameID = uuid4()
        socket.emit('createGame', game)
        history.push(`/game/${game.gameID}/${userID}`)
    }

    const handleSelectGame = (e) => {
        const gameID = e.target.id
        history.push(`/game/${gameID}/${userID}`)
    }

    // CleanUp for socket

    useEffect(() => {
        return () => {
            socket.off('newGameAdded')
        }
    }, [socket])

    return (
        <div className="setup">
            <div className="openGamesList">
                <h1>Open Games</h1>
                {Object.keys(activeGamesList).map((gameID) => {
                    const { gameName, isFull } = activeGamesList[gameID]
                    const classGameStatus = isFull
                        ? 'gameStatus-closed'
                        : 'gameStatus-open'
                    return (
                        <div
                            id={gameID}
                            className="gameSelector"
                            key={gameID}
                            onClick={(e) => !isFull && handleSelectGame(e)}
                        >
                            {gameName}
                            <div className={classGameStatus}>
                                {isFull ? 'Close' : 'Open'}
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
                        type="number"
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
