import { generateOtp } from '../../../../src/utils/verification/otpGenerator';
import TempUserModel from '../../../modules/common/models/TempUserModel';
import UserModel from '../../common/models/UserModel';
import UserProfileModel from '../../user/models/UserProfileModel';
import TempUserProfileModel from '../models/TempUserProfileModel';
import { sendOtpEmail } from '../../../../src/utils/verification/emailService';
import { mapUserToUserInterfaceTemp } from '../../../core/mappers/tempUserMapper';

interface CreateUserWithProfileParams {
  username: string;
  password: string;
  email: string;
  role: string;
  profileData: any;
}

export const tempUserProfileRepository = {
  // CREATE NEW USER
  async createUserWithProfile({ username, password, email, role, profileData }: CreateUserWithProfileParams) {
    // Create main User
    const user = await TempUserModel.create({ username, password, email, role });
    // Create related profile based on role
    await TempUserProfileModel.create({ refId: user._id, ...profileData });

    return user.email;
  },

  //FIND USER PROFILE
  async findUserWithProfile(email: string, role: string) {
    const user = await UserModel.findOne({ email, role }).lean(); // .lean() returns plain JS object
    if (!user) {
      throw new Error('User not found');
    }

    const profile = await UserProfileModel.findOne({ refId: user._id }).lean();
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
  async deleteUserAndProfile(email: string) {
    const finsUser = await TempUserModel.findOne({ email, role: "user" });
    if (!finsUser) throw new Error('User not found');
    await TempUserProfileModel.findOneAndDelete({ refId: finsUser._id });
    await TempUserModel.findByIdAndDelete(finsUser._id);
    return { message: 'User and profile deleted successfully' };
  },


  //FIND USER AND SEND OTP
  async findUserAndSendOtp(email: string) {
    // 1. Find the user
    const findUser = await TempUserModel.findOne({ email });
    if (!findUser) {
      throw new Error('User not found');
    }

    // 2. Find the user's profile ans send otp
    const existingUser = await TempUserProfileModel.findOne({ refId: findUser._id });
    if (existingUser) {
      const otp = generateOtp();
      console.log(otp);

      const updateUserProfile = await TempUserProfileModel.updateOne({ refId: findUser._id }, { $set: { otp: otp, otpExpiresAt: new Date(Date.now() + 10 * 60 * 1000) } })

      // Send OTP email
      await sendOtpEmail(email, otp);

      return mapUserToUserInterfaceTemp(findUser, updateUserProfile, { hidePassword: true });
    } else {
      throw new Error('User Profile not found');
    }
  }



};


