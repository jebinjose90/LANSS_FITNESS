// // src/infrastructure/websocket/WebSocket.ts
// import { Server, Socket } from 'socket.io';
// import http from 'http';
// import { Message } from '../../core/entities/Message';

// export const configureWebSocket =  (server: http.Server) => {
//   const io = new Server(server, {
//     cors: { origin: process.env.CLIENT_URL || 'http://localhost:5173', methods: ['GET', 'POST'], 
//     } 
//   });

//   io.on('connection', (socket: Socket) => {
//     console.log('User connected:', socket.id);

//     // Listen for messages
//     socket.on('send_message', async (data) => {
//       const { senderId, receiverId, message } = data;
//       const chatMessage = new Message({ senderId, receiverId, message });
//       await chatMessage.save();
//       io.emit('receive_message', data);
//     });

//     // Handle disconnection
//     socket.on('disconnect', () => {
//       console.log('User disconnected:', socket.id);
//     });

//     socket.on('error', (err) => {
//       console.error('Socket.io Error:', err);
//     });
//   });

//   return io;
// };
