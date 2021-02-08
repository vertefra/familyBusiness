import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Game } from '../../classes/Game'

import Cemetery from './cemetery/Cemetery'
import List from './list/List'
import Wall from './wall/Wall'
import ActivePlayers from './activePlayers/ActivePlayers'
import Player from './Player/Player'

import './board.css'
import { useParams } from 'react-router-dom'
import { socket } from '../../socket'

export const Board = () => {
    const [numberOfPlayers, setNumberOfPlayers] = useState(0)
    const [joinedPlayers, setJoinedPlayers] = useState(0)
    const [currentGame, updateGame] = useState({
        gameName: '',
        gameID: '',
        userID: '',
        numberOfPlayers,
        players: [],
        list: [],
        cemetery: [],
        gameState: 'starting',
    })

    let gameID, userID

    gameID = useParams().gameID
    userID = useParams().userID

    let joined = false

    useEffect(() => {
        if (!joined) {
            socket.emit('joinGame', { userID, gameID })
            joined = true
        }
    }, [joined])

    useEffect(() => {
        updateGame({
            ...currentGame,
            gameID,
            userID,
        })
    }, [gameID, userID])

    socket.on(
        'joinedGame',
        ({ joinedPlayers, maxPlayers, gameName, players }) => {
            setJoinedPlayers(joinedPlayers)
            setNumberOfPlayers(maxPlayers)
            updateGame({
                ...currentGame,
                gameName: gameName,
                numberOfPlayers: maxPlayers,
                players,
            })
            localStorage.setItem('game', JSON.stringify(currentGame))
        }
    )

    const handleStartGame = () => {
        const { gameID, numberOfPlayers, players, gameName } = currentGame
        const game = new Game({ numberOfPlayers, gameID, gameName, userID })
        for (let playerID of players) {
            game.assignUserToPlayer(playerID)
        }
        game.gameState = 'started'
        updateGame(game)
    }

    console.log('')
    console.log('*************************')
    console.log('* CURRENT GAME OBJ      *')
    console.log('*************************')
    console.log(currentGame)
    console.log('*************************')
    console.log('')

    return (
        <div className="wrapper">
            <h1>Family business: {currentGame.gameName}</h1>
            <div className="controllBar">
                {joinedPlayers === numberOfPlayers && joinedPlayers !== 0 ? (
                    <button onClick={handleStartGame}>New Game</button>
                ) : (
                    <h4>Waiting for everyone to join</h4>
                )}
                <div>
                    <h4>Plyaers:</h4>
                    <span>
                        {joinedPlayers} / {numberOfPlayers}
                    </span>
                </div>
            </div>
            <div className="activePlayers">
                <ActivePlayers />
            </div>
            <div className="executionList">
                <Wall />
                <List game={currentGame} />
            </div>
            <div className="cemeteryContainer">
                <Cemetery game={currentGame} />
            </div>
            <div>
                <Player game={currentGame} />
            </div>
        </div>
    )
}
