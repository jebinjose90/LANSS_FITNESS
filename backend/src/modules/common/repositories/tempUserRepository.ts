import User from '../../common/models/UserModel';
import TempUserProfileModel from '../../user/models/TempUserProfileModel';
import TempTrainerProfileModal from '../../trainer/models/TempTrainerProfileModal';
import TempUserModel from '../models/TempUserModel';

interface CreateUserWithProfileParams {
  username: string;
  password: string;
  email: string;
  role: 'user' | 'trainer' | 'admin';
  profileData: any;
}

export const userRepository = {
  async createUserWithProfile({ username, password, email, role, profileData,}: CreateUserWithProfileParams) {

    // Check if user already exists
    const existingUser = await User.findOne({ email ,role});
    if (existingUser) {
      throw new Error(`${role} alerady exists in this email.`);
    }

    // Create main User
    const user = await TempUserModel.create({ username, password, email, role });

    // Create related profile based on role
    switch (role) {
      case 'user':
        await TempUserProfileModel.create({ refId: user._id, ...profileData });
        break;
      case 'trainer':
        await TempTrainerProfileModal.create({ refId: user._id, ...profileData });
        break;
    }

    return user;
  }
};