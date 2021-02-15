import React from 'react'

import './header.css'

const Header = ({
    gameID,
    userID,
    opponentsIDs,
    gameName,
    numberOfPlayers,
}) => {
    const partecipants = 1 + opponentsIDs.length
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
                {numberOfPlayers === partecipants ? (
                    <button>Start The Game</button>
                ) : (
                    'Waiting for players to join....'
                )}
            </div>
        </div>
    )
}

export default Header
