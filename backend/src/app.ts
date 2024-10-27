import cors from 'cors';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectToDatabase from './infrastructure/database/connection';
import themeRoutes from './modules/theme/routes/themeRoutes';
import userRoutes from './modules/user/routes/userRoutes'


dotenv.config({ path: './backend/.env' });  // Load environment variables
const app = express();

// Connect to MongoDB
connectToDatabase(); // Call the connection function
app.use(cors());
app.use(morgan('dev'));

app.use('/', userRoutes);
app.use('/api', themeRoutes);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
