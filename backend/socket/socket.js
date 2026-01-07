import { Server } from 'socket.io';
import Message from '../models/Message.js';

export const setupSocket = (server) => {
  const io = new Server(server, { cors: { origin: '*' } });

  io.on('connection', (socket) => {
    console.log('Socket connected', socket.id);

    socket.on('join', (room) => {
      socket.join(room);
    });

    socket.on('send_message', async (data) => {
      // data: { from, to, text }
      const msg = new Message(data);
      await msg.save();
      // emit to rooms: both users' ids
      io.to(data.to).emit('receive_message', msg);
      io.to(data.from).emit('receive_message', msg);
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected', socket.id);
    });
  });
};
