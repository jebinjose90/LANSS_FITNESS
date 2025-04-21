// \backend\src\app.ts

import cors from 'cors';
import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import path from 'path';
import morgan from 'morgan';
import connectToDatabase from './infrastructure/database/connection';
import themeRoutes from './modules/theme/routes/themeRoutes';
import userRoutes from './modules/user/routes/userRoutes'
import trainerRoutes from './modules/trainer/routes/trainerRoutes'
import adminRoutes from './modules/admin/routes/adminRoutes'
// import chatRoutes from './modules/chat/routes/chatRoutes';
// import { configureWebSocket } from './infrastructure/websocket/WebSocket';
import passport from 'passport';
import session from 'express-session';

// Import Passport Strategies
import './modules/user/security/userPassport'; 
import cookieParser from 'cookie-parser';

const PORT = process.env.PORT || 3000;

// Dynamically resolve the path to .env file in backend folder
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const server = http.createServer(app);
// Middleware to parse JSON data
app.use(express.json());
// Middleware to parse URL-encoded data (for form submissions)
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser()); // This enables req.cookies

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5174", // Frontend origin
  credentials: true,               // Allow cookies to be sent
}));
app.use(morgan('dev'));


// Middleware for sessions
app.use(session({
  secret: process.env.JWT_SECRET || "default_secret_key", // Replace with a secure key in production
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));


app.use('/', userRoutes);
app.use('/trainer', trainerRoutes);
app.use('/admin', adminRoutes);
// app.use('/chat', chatRoutes);
app.use('/api', themeRoutes);

// WebSocket Configuration
// configureWebSocket(server);

// Connect to MongoDB
// Connect to the database and start the server
connectToDatabase() // Call the connection function
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });