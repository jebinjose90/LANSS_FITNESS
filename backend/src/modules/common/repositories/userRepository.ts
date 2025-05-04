import UserModel from '../../common/models/UserModel';
import UserProfileModel from '../../user/models/UserProfileModel';
import TrainerProfileModal from '../../trainer/models/TrainerProfileModal';
import AdminProfileModal from '../../admin/models/AdminProfileModal';

interface CreateUserWithProfileParams {
  username: string;
  password: string;
  email: string;
  role: 'user' | 'trainer' | 'admin';
  profileData: any;
}

export const userRepository = {
  // CREATE NEW USER
  async createUserWithProfile({ username, password, email, role, profileData, }: CreateUserWithProfileParams) {

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email, role });
    if (existingUser) {
      throw new Error(`${role} alerady exists in this email.`);
    }

    // Create main User
    const user = await UserModel.create({ username, password, email, role });

    // Create related profile based on role
    switch (role) {
      case 'user':
        await UserProfileModel.create({ refId: user._id, ...profileData });
        break;
      case 'trainer':
        await TrainerProfileModal.create({ refId: user._id, ...profileData });
        break;
      case 'admin':
        await AdminProfileModal.create({ refId: user._id, ...profileData });
        break;
    }
    return user;
  },

  //FIND USER PROFILE
  async findUserWithProfile(email: string, role: 'user' | 'trainer' | 'admin') {
    const user = await UserModel.findOne({ email, role }).lean(); // .lean() returns plain JS object
    if (!user) {
      throw new Error('User not found');
    }

    let profile = null;

    switch (role) {
      case 'user':
        profile = await UserProfileModel.findOne({ refId: user._id }).lean();
        break;
      case 'trainer':
        profile = await TrainerProfileModal.findOne({ refId: user._id }).lean();
        break;
      case 'admin':
        profile = await AdminProfileModal.findOne({ refId: user._id }).lean();
        break;
    }

    if (!profile) {
      throw new Error('Profile not found for this user');
    }

    // Remove the refId from profile before merging
    const { refId, ...profileWithoutRefId } = profile;

    // Merge user and profile data
    return {
      ...user,
      ...profileWithoutRefId
    };
  },

  //DELETE USER PROFILE
  async deleteUserAndProfile(email: string, role: 'user' | 'trainer' | 'admin') {
    const user = await UserModel.findOne({ email, role });
    if (!user) throw new Error('User not found');

    await UserModel.findByIdAndDelete(user._id);

    switch (user.role) {
      case 'user':
        await UserProfileModel.findOneAndDelete({ refId: user._id });
        break;
      case 'trainer':
        await TrainerProfileModal.findOneAndDelete({ refId: user._id });
        break;
      case 'admin':
        await AdminProfileModal.findOneAndDelete({ refId: user._id });
        break;
    }

    return { message: 'User and profile deleted successfully' };
  },

  //UPDATE USER PROFILE
  async updateProfile(email: string, role: 'user' | 'trainer' | 'admin', updateData: any) {
    const user = await UserModel.findOne({ email, role }).lean(); // .lean() returns plain JS object
    if (!user) {
      throw new Error('User not found');
    }
    switch (role) {
      case 'user':
        return await UserProfileModel.findOneAndUpdate({ refId: user._id }, updateData, { new: true });
      case 'trainer':
        return await TrainerProfileModal.findOneAndUpdate({ trarefId: user._id }, updateData, { new: true });
      case 'admin':
        return await AdminProfileModal.findOneAndUpdate({ arefId: user._id }, updateData, { new: true });
    }
  },

};


