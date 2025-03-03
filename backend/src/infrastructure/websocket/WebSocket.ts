// src/infrastructure/websocket/WebSocket.ts
import { Server, Socket } from 'socket.io';

export const configureWebSocket = (httpServer: any) => {
  const io = new Server(httpServer, { cors: { origin: '*' } });

  io.on('connection', (socket: Socket) => {
    console.log('User connected:', socket.id);

    // Listen for messages
    socket.on('send_message', (data) => {
      io.to(data.receiverId).emit('receive_message', data);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });

  return io;
};
