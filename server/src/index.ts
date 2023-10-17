import express, { Request, Response } from "express";
import http from "http";
import cors from "cors";
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);

app.use(cors());

const io = new Server(
    server, 
    {   
        cors: {
            origin: 'http://127.0.0.1:3000',
            methods: ['GET', 'POST'],
        },
    }
);

io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`);
    // We can write our socket event listeners in here...
});

server.listen(4000, () => 'Server is running on port 3000');
