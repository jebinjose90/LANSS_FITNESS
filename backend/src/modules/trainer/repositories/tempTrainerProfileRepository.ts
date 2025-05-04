import TempUserModel from "../../common/models/TempUserModel";
import TempTrainerProfileModel from "../models/TempTrainerProfileModal";
import { generateOtp } from "../../../utils/verification/otpGenerator";
import { sendOtpEmail } from "../../../utils/verification/emailService";

interface CreateTrainerWithProfileParams {
  username: string;
  password: string;
  email: string;
  role: string;
  profileData: any;
}

export const tempTrainerProfileRepository = {
  // CREATE NEW USER
  async createTrainerWithProfile({ username, password, email, role, profileData }: CreateTrainerWithProfileParams) {
    // Create main User
    const user = await TempUserModel.create({ username, password, email, role });
    // Create related profile based on role
    await TempTrainerProfileModel.create({ refId: user._id, ...profileData });

    return user;
  },

  //DELETE USER PROFILE
  async deleteTrainerAndProfile(email: string) {
    const finsTrainer = await TempUserModel.findOne({ email, role: "trainer" });
    if (!finsTrainer) throw new Error('User not found');
    await TempTrainerProfileModel.findOneAndDelete({ refId: finsTrainer._id });
    await TempUserModel.findByIdAndDelete(finsTrainer._id);
    return { message: 'User and profile deleted successfully' };
  },

  //FIND USER AND SEND OTP
    async findTrainerAndSendOtp(email: string) {
      // 1. Find the user
      const findTrainer = await TempUserModel.findOne({ email, role: "trainer" });
      if (!findTrainer) {
        throw new Error('User not found');
      }
  
      // 2. Find the user's profile ans send otp
      const existingUser = await TempTrainerProfileModel.findOne({ refId: findTrainer._id });
      if (existingUser) {
        const otp = generateOtp();
        console.log(otp);
  
        const updateTrainerProfile = await TempTrainerProfileModel.updateOne({ refId: findTrainer._id }, { $set: { otp: otp, otpExpiresAt: new Date(Date.now() + 10 * 60 * 1000) } })
  
        // Send OTP email
        await sendOtpEmail(email, otp);
  
        return mapTrainerToTrainerInterfaceTemp(findTrainer, updateTrainerProfile, { hidePassword: true });
      } else {
        throw new Error('User Profile not found');
      }
    }


}