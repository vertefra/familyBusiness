import Express from 'express';
import cors from 'cors';
import httpServer from 'http';
import { Server } from 'socket.io';
import chalk from 'chalk';
import { activeGames } from './Games';

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
	activeGames.addGame(socket.id);
});

app.use(cors());

app.get('/ping', (req, res) => {
	res.status(200).json({
		ping: 'pong',
	});
});

// socket.on('connection', (socket) => {
// 	console.log(chalk.green(' - New user connected'));
// 	console.log(socket);
// });

http.listen(PORT, () => {
	console.log(chalk.green.underline` - Server listening on port ${PORT}`);
});
