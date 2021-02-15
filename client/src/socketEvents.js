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

export const handleJoined = (
    setGameID,
    setGameName,
    setOpponentsIDs,
    userID
) => {
    return (gameToJoin) => {
        const { gameID, gameName, players } = gameToJoin
        setGameID(gameID)
        setGameName(gameName)

        const opponenentsIDs = players.filter((p) => p !== userID)
        setOpponentsIDs([...opponenentsIDs])
    }
}
