// /backend/src/modules/user/repositories/userRepository.ts
import { User } from '@core/entities/User';
import UserModel from '../models/UserModel'; // Mongoose model for the User

export const getUser = async (): Promise<User | null> => {
  return await UserModel.findOne(); // Fetching the user (assuming only one user document)
};
