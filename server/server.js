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

	socket.on('disconnect', () => {
		const playerID = socket.id;
		console.log(chalk.yellow(` - Player ${playerID} disconnected`));
		for (let gameID in games) {
			const game = games[gameID];
			const user = game.players.find((p) => p === playerID);
			console.log(chalk.yellow('\nUser found --> ', user));
			if (user) {
				console.log(chalk.yellow(`User found in game`));
				console.log(game);
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
