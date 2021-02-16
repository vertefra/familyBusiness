import React from 'react'
import { Deck } from '../../classes/Deck'
import { MurderInc, newYorkMob, PurpleGang } from '../../classes/families'
import { Player } from '../../classes/Player'
import { socket } from '../../socket'

import './header.css'

const Header = ({
    gameID,
    userID,
    opponentsIDs,
    gameName,
    numberOfPlayers,
    gameState,
}) => {
    const partecipants = 1 + opponentsIDs.length
    console.log(gameID, userID, opponentsIDs, numberOfPlayers, gameName)
    const handleStartGame = () => {
        // Creating Players and assigning random families
        const families = [MurderInc, newYorkMob, PurpleGang]
        const playersIDs = [userID, ...opponentsIDs]
        const initPlayers = []

        for (let playerID of playersIDs) {
            const ranIndex = Math.floor(Math.random() * families.length)
            const familyObj = families.splice(ranIndex, 1)
            console.log('====== assigned family')
            console.log(familyObj)
            const p = new Player(playerID, familyObj[0])
            p.initFamily()
            initPlayers.push(p)
        }

        const deck = new Deck()
        deck.createDeck()
        Deck.shuffle(deck.deck)

        for (let playerObj of initPlayers) {
            Deck.serve(deck.deck, playerObj)
        }

        // randomly selecting the player that will start the turn

        const randomIndex = Math.floor(Math.random() * initPlayers.length)

        console.log('PLAYER => ', randomIndex)
        console.log('WILL START THE MATCH')

        const playerStarting = initPlayers[randomIndex]
        playerStarting.playerTurn = true

        socket.emit('startGame', { gameID, deck, initPlayers })
    }

    return (
        <div className="header">
            <div className="datafield">
                <h4>Game Name:</h4>{' '}
                <input
                    className="headerInput"
                    readOnly={true}
                    defaultValue={gameName}
                ></input>
            </div>
            <div className="datafield">
                <h4>GameID:</h4>
                <input
                    className="headerInput"
                    readOnly={true}
                    defaultValue={gameID}
                ></input>
            </div>
            <div className="datafield">
                <h4>opponentsIDs:</h4>
                <input
                    className="headerInput"
                    readOnly={true}
                    defaultValue={opponentsIDs.map((id) => id + ', ')}
                ></input>
            </div>
            <div className="datafield">
                <h4>Joined:</h4>
                <input
                    className="headerInput"
                    readOnly={true}
                    defaultValue={partecipants + ' / ' + numberOfPlayers}
                ></input>
            </div>
            <div className="datafield">
                <h4>UserID:</h4>
                <input
                    className="headerInput"
                    readOnly={true}
                    defaultValue={userID}
                ></input>
            </div>
            <div className="datadfield">
                {numberOfPlayers === partecipants &&
                    gameState !== 'playing' && (
                        <button onClick={handleStartGame}>
                            Start The Game
                        </button>
                    )}
                {numberOfPlayers !== partecipants &&
                    'Waiting for players to join...'}
            </div>
        </div>
    )
}

export default Header
