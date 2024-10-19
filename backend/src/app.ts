import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: './backend/.env' });  // Load environment variables
import connectToDatabase from './infrastructure/database/connection';
import themeRoutes from './modules/theme/routes/themeRoutes';

const app = express();

// Connect to MongoDB
connectToDatabase(); // Call the connection function

const UserSchema = new mongoose.Schema({
  name: String,
  age: String
});

const UserModel = mongoose.model('User', UserSchema, 'user');

// Route to get users
app.get('/getUsers', async (req: Request, res: Response) => {
  console.log('GET /getUsers called');  // Log when the route is called
  try {
    const users = await UserModel.find({});
    console.log('Users found:', users);  // Log the users from the database
    res.json(users);
  } catch (error) {
    console.error('Error retrieving users:', error);  // Log any errors
    res.status(500).json({ message: 'Error retrieving users', error });
  }
});

app.use('/api', themeRoutes);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
