import { activeGames } from '../Games.js';

export const addNewGameEvent = (io) => {
	return (game) => {
		console.log('NEW GAME EVENT');
		activeGames.addGame(game);
		io.emit('newGameAdded', activeGames);
	};
};
