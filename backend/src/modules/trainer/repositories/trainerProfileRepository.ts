import TempUserModel from "../../common/models/TempUserModel";
import UserModel from "../../common/models//UserModel";
import bcrypt from 'bcryptjs'; // Import bcrypt for password comparison
import TempTrainerProfileModel from "../models/TempTrainerProfileModal";
import { tempTrainerProfileRepository } from "./tempTrainerProfileRepository";
import TrainerProfileModel from "../models/TrainerProfileModal";
import { mapTrainerToTrainerInterface } from "../../../core/mappers/trainerMapper";

export const trainerProfileRepository = {
  //FIND TRAINER WITH EMAIL OR USERNAME
  async findTrainerWithEmailOrUsername(email: string, username: string) {
    const findUser = await UserModel.findOne({ role: "trainer", $or: [{ email }, { username }] });
    if (findUser) {
      throw new Error('Email or username already in use.');
    }
  },

  //FIND USER AND VERIFY OTP TO CREATE USER
  async createTrainerByVerifyingOtp(email: string, otp: string) {

    // 1. Find the user
    const findUser = await TempUserModel.findOne({ email });
    if (!findUser) {
      throw new Error('User not found');
    }

    // 2. Find the user's profile
    const trainerProfile = await TempTrainerProfileModel.findOne({ refId: findUser._id });
    if (!trainerProfile) {
      throw new Error('User profile not found');
    }

    // 3. Check OTP match
    if (trainerProfile.otp !== otp) {
      throw new Error('Invalid OTP');
    }

    // Check OTP expiration
    if (trainerProfile.otpExpiresAt < new Date()) {
      await tempTrainerProfileRepository.deleteTrainerAndProfile(email)
      throw new Error('OTP expired. Please request a new one.');
    }

    const { v4: uuidv4 } = require('uuid');

    // Create main User
    const createdUser = await UserModel.create({
      username: findUser.username,
      email: findUser.email,
      password: findUser.password,
      role: findUser.role
    });

    // Create related profile based on role
    await TrainerProfileModel.create({
      refId: createdUser._id,
      phone: trainerProfile.phone,
      isGoogleAuth: false,
      googleId: uuidv4(),
      profilePictureUrl: trainerProfile.profilePictureUrl,
      subscription: "nill",
    });

    await tempTrainerProfileRepository.deleteTrainerAndProfile(email)
    // 4. Return user details

    // 🎯 Use the mapper!
    return mapTrainerToTrainerInterface(createdUser, trainerProfile, { hidePassword: true });
  },

  //FIND TRAINER BY ID
  async findTrainerWithId(userId: string) {
    // 1. Find the user
    const findTrainer = await UserModel.findById({_id: userId });
    if (!findTrainer) {
      throw new Error('Trainer not found');
    }

    // 2. Find the user's profile
    const trainerProfile = await TrainerProfileModel.findOne({ refId: findTrainer._id });
    if (!trainerProfile) {
      throw new Error('User profile not found');
    }

    // 🎯 Use the mapper!
    return mapTrainerToTrainerInterface(findTrainer, trainerProfile, { hidePassword: true });
  },

  //FIND TRAINER BY USERNAME
  async findTrainerWithUsername(username: string) {
    // 1. Find the user
    const findTrainer = await UserModel.findOne({ username });
    if (!findTrainer) {
      throw new Error('User not found');
    }

    // 2. Find the user's profile
    const trainerProfile = await TrainerProfileModel.findOne({ refId: findTrainer._id });
    if (!trainerProfile) {
      throw new Error('User profile not found');
    }

    // 🎯 Use the mapper!
    return mapTrainerToTrainerInterface(findTrainer, trainerProfile, { hidePassword: true });
  },

  async trainerLogin(email: string, password: string) {
    const findUser = await UserModel.findOne({ email });

    if (!findUser) {
      throw new Error("User not found");
    }

    if (!findUser.password) {
      throw new Error("Password is not set for this user");
    }

    if (findUser.role !== "trainer") {
      throw new Error(`${findUser.role} not found in this email`);
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, findUser.password);
    if (!isMatch) {
      throw new Error("Incorrect password");
    }

    return findUser; // Return user object if credentials are valid
  },

}