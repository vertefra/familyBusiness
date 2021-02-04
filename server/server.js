import Express from 'express';
import cors from 'cors';
import httpServer from 'http';
import { Server } from 'socket.io';
import chalk from 'chalk';
import { activeGames } from './Games.js';
import { addNewGameEvent } from './socketEvents/addNewGameEvent.js';
import { joinGameEvent } from './socketEvents/joinGameEvent.js';

const app = Express();
const http = httpServer.Server(app);
const io = new Server(http, {
	cors: {
		origin: 'http://localhost:9000/',
		methods: ['GET', 'POST'],
		credentials: true,
	},
});

const PORT = 3000;

io.on('connection', (socket) => {
	const userID = socket.id;
	console.log(chalk.green('\n - A new user connected => id:', userID));
	// Sending current game list to new connection
	io.to(userID).emit('newGameAdded', activeGames);
	socket.on('addNewGame', addNewGameEvent(io, userID));
	socket.on('joinGame', joinGameEvent(io, userID));
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
