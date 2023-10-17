import { Server } from "socket.io";
import { User } from "./interfaces/User";

const CHAT_BOT = 'ChatBot';

export function initSocket(server: any) {
    const io = new Server(server, {
        cors: {
            origin: 'http://localhost:3000',
            methods: ['GET', 'POST'],
        },
    });

    let roomName = ''; // E.g. javascript, node,...
    let allUsers: User[] = []; // All users
    let chatRoomUsers: User[] = []; // All users in the current room

    // Handle incoming socket connections
    io.on('connection', (socket) => {
        console.log(`User connected: ${socket.id}`);

        // Event listener for joining a room
        socket.on('join_room', (data) => {
            const { username, room } = data;
            socket.join(room); // Join the user to a socket room

            const __createdtime__ = Date.now();

            // Notify room members about the user's entrance
            socket.to(room).emit('receive_message', {
                message: `${username} has joined the chat room`,
                username: CHAT_BOT,
                __createdtime__,
            });

            // Send a welcome message to the user who joined
            socket.emit('receive_message', {
                message: `Welcome ${username}`,
                username: CHAT_BOT,
                __createdtime__,
            });

            roomName = room;

            // Update the list of all users and chat room users
            allUsers.push({ socket_id: socket.id, username, room });
            chatRoomUsers = allUsers.filter((user) => user.room === room);

            // Broadcast the list of chat room users to all room members
            socket.to(room).emit('chatroom_users', chatRoomUsers);
            socket.emit('chatroom_users', chatRoomUsers);
        });
    });
}