import { activeGames } from '../Games.js';

export const addNewGameEvent = (io) => {
	return (game, playerID) => {
		activeGames.addGame(game);
		const createdGame = activeGames.getGame(game.gameID);
		createdGame.addPlayer(playerID);
		io.emit('newGameAdded', activeGames);
	};
};
