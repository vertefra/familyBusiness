import React from 'react'
import { socket } from '../../socketio'
import './setup.css'

const Setup = () => {
    const handleSubmit = () => {
        console.log('create game')
    }
    return (
        <div className="setup">
            <div className="openGamesList">
                <h1>Open Games</h1>
            </div>
            <div className="createGame">
                <h1>Host a game</h1>
                <div className="inputField">
                    <label htmlFor="gameName">Game Name</label>
                    <input type="text" id="gameName"></input>
                </div>
                <div className="inputField">
                    <label htmlFor="gameName">Number of Players</label>
                    <input type="text" id="gameName"></input>
                </div>
                <input
                    type="submit"
                    value="create new game"
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}

export default Setup
