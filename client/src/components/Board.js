import React, { useEffect, useState } from 'react'

import { Deck } from '../classes/Deck'
import { socket } from '../socket'
import {
    handleHandshake,
    handleJoined,
    handleUpdateGameList,
} from '../socketEvents'
import GamesList from './GamesList'

import './board.css'
import Header from './header/Header'

const Board = () => {
    const [userID, setUserID] = useState('')
    const [gamesList, setGamesList] = useState({})

    const [gameName, setGameName] = useState('')
    const [gameID, setGameID] = useState('')
    const [numberOfPlayers, setNumberOfPlayers] = useState(3)
    const [opponentsIDs, setOpponentsIDs] = useState([])
    const [joined, setJoined] = useState(false)

    const [executionList, setExecutionList] = useState([])
    const [executionWall, setExecutionWall] = useState('')
    const [cemetery, setCemetery] = useState([])
    const [deck, setDeck] = useState([])
    const [isWar, setIsWar] = useState(false)

    const [hand, setHand] = useState([])
    const [mobsters, setMobsters] = useState([])

    socket.on('updateGameList', handleUpdateGameList(setGamesList))
    socket.on('handshake', handleHandshake(setUserID, setGamesList))

    useEffect(() => {
        socket.on(
            'joined',
            handleJoined(setGameID, setGameName, setOpponentsIDs, userID)
        )
        return () => socket.off('joined')
    }, [joined])

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
                    opponentsIDs={opponentsIDs}
                    gameName={gameName}
                    numberOfPlayers={numberOfPlayers}
                />
            </div>
        </div>
    )
}

export default Board
