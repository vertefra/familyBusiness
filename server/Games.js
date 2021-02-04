class ActiveGames {
	constructor() {
		this.activeGames = {};
	}

	addGame(gameID = '', players = 3) {
		this.activeGames[gameID] = new Game(players, gameID);
	}
}

class Game {
	constructor(numberOfPlayers = 3, gameID = '') {
		this.numberOfPlayers = numberOfPlayers;
		this.gameID = gameID;
	}
}

export const activeGames = new ActiveGames();
