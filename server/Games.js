import chalk from 'chalk';

class ActiveGames {
	constructor() {
		this.activeGames = {};
	}

	addGame({ gameID = '', numberOfPlayers = 3, gameName = '' }) {
		this.activeGames[gameID] = new Game({ gameID, gameName, numberOfPlayers });
	}

	getGame(gameID) {
		return this.activeGames[gameID];
	}
}

class Game {
	constructor({ numberOfPlayers = 3, gameID = '', gameName = '' }) {
		this.numberOfPlayers = numberOfPlayers;
		this.gameID = gameID;
		this.gameName = gameName;
		this.players = [];
		this.isFull = false;
	}

	addPlayer(playerID) {
		if (!this.isFull) {
			this.players.push(playerID);
			if (this.players.length === this.numberOfPlayers) {
				this.isFull = true;
			}
		}
	}

	getPlayers() {
		return this.players;
	}

	getJoinedPlayers() {
		return this.players.length;
	}

	getMaxPlayers() {
		return this.numberOfPlayers;
	}

	findPlayer(playerID) {
		return this.players.includes(playerID);
	}

	removePlayer(playerID) {
		const playerIndex = this.players.indexOf(playerID);
		if (playerID) {
			this.players.splice(playerIndex, 1);
		} else {
			throw Error(
				chalk.red.underline('Something is wrong with playerID ', playerID)
			);
		}
		if (this.players.length < this.numberOfPlayers) {
			this.isFull = false;
		}
	}
}

export const activeGames = new ActiveGames();
