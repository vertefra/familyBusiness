export const handleHandshake = (setUserID, setGamesList) => {
    return ({ userID, games }) => {
        setUserID(userID)
        setGamesList(games)
    }
}

export const handleUpdateGameList = (setGamesList) => {
    return (games) => {
        setGamesList(games)
    }
}

export const handleJoined = ({
    setGameID,
    setGameName,
    setUserID,
    setOpponentsIDs,
    userID,
}) => {
    return (gameToJoin) => {
        const { gameID, gameName, players } = gameToJoin
        const opponenentsIDs = players.filter((p) => p !== userID)
        setGameID(gameID)
        setGameName(gameName)
        setUserID(userID)
        setOpponentsIDs([...opponenentsIDs])
    }
}

export const handleGameStarted = (gameObject, setGameObject) => {
    return (game) => {
        console.log('Socket game event')
        console.log(game)
        setGameObject({
            ...gameObject,
            ...game,
        })
    }
}
