import React, { useEffect, useState } from 'react'

import { socket } from '../socket'
import {
    handleGameStarted,
    handleHandshake,
    handleJoined,
    handleUpdateGameList,
} from '../socketEvents'
import GamesList from './GamesList'

import './board.css'
import Header from './header/Header'
import Player from './Player/Player'
import Opponents from './Opponents/Opponents'

const Board = () => {
    const [userID, setUserID] = useState('')
    const [gamesList, setGamesList] = useState({})

    const [gameName, setGameName] = useState('')
    const [gameID, setGameID] = useState('')
    const [numberOfPlayers, setNumberOfPlayers] = useState(3)
    const [opponentsIDs, setOpponentsIDs] = useState([])
    const [joined, setJoined] = useState(false)

    const [gameObject, setGameObject] = useState({
        gameID: '',
        gameState: 'waiting',
        players: [],
        initPlayers: [],
        executionList: [],
        executionWall: null,
        cemetery: [],
        deck: [],
        isWar: false,
    })

    const [player, setPlayer] = useState({
        playerID: '',
        hand: [],
        mobsters: [],
        family: '',
        playerTurn: false,
    })

    const [opponentPlayers, setOpponentPlayers] = useState([])

    socket.on('updateGameList', handleUpdateGameList(setGamesList))

    useEffect(() => {
        socket.on('handshake', handleHandshake(setUserID, setGamesList))
        return () => socket.off('handshake')
    }, [])

    useEffect(() => {
        socket.on(
            'joined',
            handleJoined({
                setGameID,
                setGameName,
                setOpponentsIDs,
                setUserID,
                userID,
            })
        )
        return () => socket.off('joined')
    }, [joined])

    useEffect(() => {
        socket.on('gameStarted', handleGameStarted(gameObject, setGameObject))
        return () => socket.off('gameStarted')
    }, [])

    useEffect(() => {
        if (gameObject.gameState === 'playing') {
            // find player
            const thisPlayer = gameObject.initPlayers.find(
                (p) => p.playerID === userID
            )
            if (!thisPlayer) {
                throw Error("Can't find the player")
            }

            setPlayer(thisPlayer)

            // set opponents

            const theseOpponents = gameObject.initPlayers.filter(
                (p) => p.playerID !== userID
            )

            setOpponentPlayers(theseOpponents)
        }
    }, [gameObject])

    console.log('======================')
    console.log('|     GAME STATUS    |')
    console.log('======================')

    console.log(gameObject)

    console.log(player)

    return (
        <div className="board">
            <div>
                {!joined && (
                    <GamesList
                        gamesList={gamesList}
                        userID={userID}
                        setJoined={setJoined}
                    />
                )}
            </div>
            <div className="game">
                <Header
                    gameID={gameID}
                    userID={userID}
                    opponentsIDs={opponentsIDs}
                    gameName={gameName}
                    numberOfPlayers={numberOfPlayers}
                    gameState={gameObject.gameState}
                />
                <Opponents opponents={opponentPlayers} />
                <Player player={player} />
            </div>
        </div>
    )
}

export default Board
