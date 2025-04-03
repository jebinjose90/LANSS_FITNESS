// /backend/src/modules/user/repositories/userRepository.ts
import { Trainer } from '@core/entities/Trainer';
import TrainerModel from '../models/TrainerModel'; // Mongoose model for the User

export const getUser = async (): Promise<Trainer | null> => {
  return await TrainerModel.findOne(); // Fetching the user (assuming only one user document)
};
