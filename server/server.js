import Express from 'express';
import cors from 'cors';
import httpServer from 'http';
import { Server } from 'socket.io';
import chalk from 'chalk';

const app = Express();
const http = httpServer.Server(app);
const io = new Server(http, {
	cors: {
		origin: '*',
		methods: ['GET', 'POST'],
		credentials: true,
	},
});

const PORT = 3000;

const games = {};

// samble of gameObject with key gameID

// const game = {
// 	gameName: "",
// 	numberOfPlayers: 3,
// 	players: ["id1", "id2", "id3"],
// 	deck: [cardObj, cardObj2 ...]
// }

io.on('connection', (socket) => {
	console.log(
		chalk.yellow.underline('\n -  New user connected => ', socket.id)
	);
	socket.emit('handshake', {
		userID: socket.id,
		games,
	});

	socket.on(
		'gameJoin',
		({
			gameID,
			newGameName: gameName,
			newGameNumberOfPlayers: numberOfPlayers,
			userID,
		}) => {
			const gameToJoin = games[gameID];

			// If game sdoes not exists
			if (!gameToJoin) {
				games[gameID] = {
					gameName,
					gameID,
					numberOfPlayers,
					players: [userID],
				};
			} else {
				// else just add the player to the players list
				const players = [...gameToJoin.players, userID];
				gameToJoin.players = [...players];
			}

			socket.broadcast.emit('updateGameList', games);
			socket.join(gameID);
			io.to(gameID).emit('joined', games[gameID]);
		}
	);

	socket.on('startGame', ({ gameID, deck, initPlayers }) => {
		const gameToStart = games[gameID];

		gameToStart.initPlayers = [...initPlayers];
		gameToStart.deck = deck.deck;
		gameToStart.executionList = [];
		gameToStart.executionWall = null;
		gameToStart.cemetery = [];
		gameToStart.isWar = false;
		gameToStart.gameState = 'playing';

		io.to(gameID).emit('gameStarted', gameToStart);
	});

	socket.on('syncGame', (game) => {
		const gameID = game;
		console.log(chalk.greenBright('-Syncying Game ', gameID));
		io.to(gameID).emit('syncGame', game);
	});

	socket.on('disconnect', () => {
		const playerID = socket.id;
		console.log(chalk.yellow(`\n - Player ${playerID} disconnected`));
		for (let gameID in games) {
			const game = games[gameID];
			const idx = game.players.findIndex((p) => p === playerID);
			console.log(chalk.red('\nINDEX ==> ', idx));
			if (idx !== undefined || idx !== null) {
				game.players.splice(idx, 1);
				console.log(chalk.yellow(' - player removed from game'));
				const idxObj = game.initPlayers?.findIndex(
					(p) => idx.playerID === playerID
				);
				if (idxObj) {
					game.initPlayers.splice(idxObj, 1);
				}
			}

			if (game.players.length === 0) {
				console.log(chalk.yellow('No more players. Removing game'));
				delete games[gameID];
			}
		}
		console.log(chalk.yellow('\n New games list'));
		console.log(games);
		socket.broadcast.emit('updateGameList', games);
	});
});

app.use(cors());

app.get('/ping', (req, res) => {
	res.status(200).json({
		ping: 'pong',
	});
});

http.listen(PORT, () => {
	console.log(chalk.green.underline` - Server listening on port ${PORT}`);
});
