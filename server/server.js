import Express from 'express';
import cors from 'cors';
import httpServer from 'http';
import { Server } from 'socket.io';
import chalk from 'chalk';
import { activeGames } from './Games.js';

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

io.on('connection', (socket) => {
	socket.emit('handshake', {
		userID: socket.id,
		activeGames: activeGames.activeGames,
	});

	socket.on('createGame', (game) => {
		console.log(chalk.yellow(' \n- New Game Added '));
		activeGames.addGame({ ...game });
		socket.broadcast.emit('newGameAdded', activeGames.activeGames);
	});

	socket.on('joinGame', ({ gameID, userID }) => {
		console.log(chalk.yellow('\n - Joining a game '));
		console.log(gameID, userID);

		const currentGame = activeGames.getGame(gameID);

		currentGame.addPlayer(userID);

		const joinedPlayers = currentGame.getJoinedPlayers();
		const maxPlayers = currentGame.getMaxPlayers();
		const gameName = currentGame.gameName;
		const players = currentGame.players;
		// joining room with id gameID

		socket.join(gameID);
		io.to(gameID).emit('joinedGame', {
			players,
			joinedPlayers,
			gameName,
			maxPlayers,
		});
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
