import TempUserModel from '../../../modules/common/models/TempUserModel';
import UserModel from '../../common/models/UserModel';
import TempUserProfileModel from '../models/TempUserProfileModel';
import { tempUserProfileRepository } from './tempUserProfileRepository';
import UserProfileModel from '../models/UserProfileModel';
import { mapUserToUserInterface } from '../../../core/mappers/userMapper';
import bcrypt from 'bcryptjs'; // Import bcrypt for password comparison

export const userProfileRepository = {
  //FIND USER WITH EMAIL OR USERNAME
  async findUserWithEmailOrUsername(email: string, username: string) {
    const findUser = await UserModel.findOne({ role: "user", $or: [{ email }, { username }] });
    if (findUser) {
      throw new Error('Email or username already in use.');
    }
  },

  //FIND USER AND VERIFY OTP TO CREATE USER
  async createUserByVerifyingOtp(email: string, otp: string) {

    // 1. Find the user
    const findUser = await TempUserModel.findOne({ email });
    if (!findUser) {
      throw new Error('User not found');
    }

    // 2. Find the user's profile
    const userProfile = await TempUserProfileModel.findOne({ refId: findUser._id });
    if (!userProfile) {
      throw new Error('User profile not found');
    }

    // 3. Check OTP match
    if (userProfile.otp !== otp) {
      throw new Error('Invalid OTP');
    }

    // Check OTP expiration
    if (userProfile.otpExpiresAt < new Date()) {
      await tempUserProfileRepository.deleteUserAndProfile(email)
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
    await UserProfileModel.create({
      refId: createdUser._id,
      phone: userProfile.phone,
      isGoogleAuth: false,
      googleId: uuidv4(),
      profilePictureUrl: userProfile.profilePictureUrl,
      subscription: "nill",
    });

    await tempUserProfileRepository.deleteUserAndProfile(email)
    // 4. Return user details

    // 🎯 Use the mapper!
    return mapUserToUserInterface(createdUser, userProfile, { hidePassword: true });
  },

  //FIND USER BY ID
  async findUserWithId(userId: string) {
    // 1. Find the user
    const findUser = await UserModel.findById({_id: userId });
    if (!findUser) {
      throw new Error('User not found');
    }

    // 2. Find the user's profile
    const userProfile = await UserProfileModel.findOne({ refId: findUser._id });
    if (!userProfile) {
      throw new Error('User profile not found');
    }

    // 🎯 Use the mapper!
    return mapUserToUserInterface(findUser, userProfile, { hidePassword: true });
  },

  //FIND USER BY USERNAME
  async findUserWithUsername(username: string) {
    // 1. Find the user
    const findUser = await UserModel.findOne({ username });
    if (!findUser) {
      throw new Error('User not found');
    }

    // 2. Find the user's profile
    const userProfile = await UserProfileModel.findOne({ refId: findUser._id });
    if (!userProfile) {
      throw new Error('User profile not found');
    }

    // 🎯 Use the mapper!
    return mapUserToUserInterface(findUser, userProfile, { hidePassword: true });
  },

  async userLogin(email: string, password: string) {
    const findUser = await UserModel.findOne({ email });

    if (!findUser) {
      throw new Error("User not found");
    }

    if (!findUser.password) {
      throw new Error("Password is not set for this user");
    }

    if (findUser.role !== "user") {
      throw new Error(`${findUser.role} not found in this email`);
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, findUser.password);
    if (!isMatch) {
      throw new Error("Incorrect password");
    }

    return findUser; // Return user object if credentials are valid
  },

  async updateUserProfile(email: string, username: string, age: string, gender: string, height: string, weight: string, place: string) {

    // 1. Find the user
    const findUser = await UserModel.findOne({ email });
    if (!findUser) {
      throw new Error('User not found');
    }

    // 2. Find the user's profile
    const userProfile = await UserProfileModel.findOne({ refId: findUser._id });
    if (!userProfile) {
      throw new Error('User profile not found');
    }

    const updateUserProfile = await UserProfileModel.updateOne({ refId: findUser._id }, { $set: { username: username, age: age, gender: gender, height: height, weight: weight, place: place }})

    return mapUserToUserInterface(findUser, updateUserProfile, { hidePassword: true });
  }

};


