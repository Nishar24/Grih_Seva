import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import helperRoutes from './routes/helperRoutes.js';
import requestRoutes from './routes/requestRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import { setupSocket } from './socket/socket.js';

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/helpers', helperRoutes);
app.use('/api/request', requestRoutes);
app.use('/api/payment', paymentRoutes);

app.get('/', (req, res) => res.send('HomeEase API Running'));

setupSocket(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
