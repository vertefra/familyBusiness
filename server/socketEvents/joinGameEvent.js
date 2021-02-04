import { activeGames } from '../Games.js';

export const joinGameEvent = (io, userID) => {
	return (gameID) => {
		const game = activeGames.getGame(gameID);
		game.addPlayer(userID);
		io.to(userID).emit('gameJoined', gameID);
	};
};
