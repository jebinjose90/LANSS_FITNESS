// \backend\src\app.ts

import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import morgan from 'morgan';
import connectToDatabase from './infrastructure/database/connection';
import themeRoutes from './modules/theme/routes/themeRoutes';
import userRoutes from './modules/user/routes/userRoutes'
import passport from 'passport';
import session from 'express-session';

// Import Passport Strategies
import './modules/user/security/userPassport'; 

const PORT = process.env.PORT || 3000;

// Dynamically resolve the path to .env file in backend folder
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
// Middleware to parse JSON data
app.use(express.json());
// Middleware to parse URL-encoded data (for form submissions)
app.use(express.urlencoded({ extended: true }));
// Connect to MongoDB

app.use(cors());
app.use(morgan('dev'));

// Middleware for sessions
app.use(session({
  secret: process.env.JWT_SECRET || "default_secret_key", // Replace with a secure key in production
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', userRoutes);
app.use('/api', themeRoutes);

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