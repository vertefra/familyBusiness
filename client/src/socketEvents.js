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

export const handleGameSync = (gameObject, setGameObject) => {
    return (game) => {
        const players = [...game.players]
        const initPlayers = [...game.initPlayers]
        const executionList = [...game.executionList]
        const executionWall = { ...game.executionWall }
        const cemetery = [...game.cemetery]
        const deck = [...game.deck]
        setGameObject({
            ...gameObject,
            ...game,
            players,
            initPlayers,
            executionList,
            executionWall,
            cemetery,
            deck,
        })
    }
}
