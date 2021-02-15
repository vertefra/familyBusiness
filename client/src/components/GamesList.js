import React, { useState } from 'react'
import { v4 as uuid4 } from 'uuid'
import { socket } from '../socket'

import './gamesList.css'

const GamesList = ({ gamesList, userID, setJoined }) => {
    const [newGameName, setNewGameName] = useState('New Game')
    const [newGameNumberOfPlayers, setNewGameNumberOfPlayers] = useState(3)

    const gameForStorage = {
        userID: '',
        gameID: '',
    }

    const handleJoinGame = (e) => {
        const gameID = e.target.id || uuid4()
        gameForStorage.gameID = gameID
        gameForStorage.userID = userID
        localStorage.setItem('game', JSON.stringify(gameForStorage))
        socket.emit('gameJoin', {
            gameID,
            newGameName,
            newGameNumberOfPlayers,
            userID,
        })

        setJoined(true)
    }

    const handleChange = (e) => {
        const n = e.target.value
        if (parseInt(n) < 3) {
            setNewGameNumberOfPlayers(3)
        } else if (parseInt(n) > 6) {
            setNewGameNumberOfPlayers(6)
        } else {
            setNewGameNumberOfPlayers(n)
        }
    }

    return (
        <div className="gamesList">
            <div>
                <div className="datafield">
                    <label htmlFor="gameName">Game Name</label>
                    <input
                        type="text"
                        value={newGameName}
                        onChange={(e) => setNewGameName(e.target.value)}
                    ></input>
                </div>
                <div className="datafield">
                    <label htmlFor="numberOfPlayers">Number of Players</label>
                    <input
                        type="number"
                        value={newGameNumberOfPlayers}
                        onChange={handleChange}
                    ></input>
                </div>
                <button onClick={handleJoinGame}>Create Game</button>
            </div>
            <div className="listOfGames">
                {Object.keys(gamesList).map((id) => {
                    const { gameName, numberOfPlayers, players } = gamesList[id]
                    const joined = players.length
                    return (
                        <div key={id} className="gameInGameList">
                            <h4>{gameName}</h4>
                            <small>
                                players {joined}/{numberOfPlayers}
                            </small>
                            {joined < numberOfPlayers && (
                                <button id={id} onClick={handleJoinGame}>
                                    Join
                                </button>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GamesList
