class ActiveGames {
	constructor() {
		this.activeGames = {};
	}

	addGame({ gameID = '', numberOfPlayers = 3, gameName = '' }) {
		this.activeGames[gameID] = new Game({ gameID, gameName, numberOfPlayers });
	}
}

class Game {
	constructor({ numberOfPlayers = 3, gameID = '', gameName = '' }) {
		this.numberOfPlayers = numberOfPlayers;
		this.gameID = gameID;
		this.gameName = gameName;
	}
}

export const activeGames = new ActiveGames();
