// backend/src/modules/user/security/userPassport.ts

import passport from 'passport';
import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth20';
import UserModel from '../models/TrainerModel';

passport.serializeUser((user, done) => {
  done(null, (user as any)._id); // Store only the user ID in the session
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findById(id);
    done(null, user); // Retrieve the user from the database using the ID
  } catch (error) {
    done(error);
  }
});


export default passport.use(
    'trainer-google',
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.USER_GOOGLE_CALLBACK_URL!,
    },
    async (accessToken, refreshToken, profile: Profile, done) => {
      try {
        const existingUser = await UserModel.findOne({ googleId: profile.id });
        if (existingUser) return done(null, existingUser);

        // Check if profile.emails is defined
        if (profile.emails && profile.emails.length > 0) {
          const newUser = await UserModel.create({
            googleId: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName,
            // Add other required fields here
            profilePictureUrl: profile._json.picture || '', // Assuming Google profile returns picture URL
            isGoogleAuth: true, // Setting the isGoogleAuth field to true
            phone: '', // You can set a default value or handle this based on your application logic
            password: '', // Set a default password or handle accordingly
            username: profile.displayName, // Use the Google display name as the username or customize as needed
          });

          return done(null, newUser);
        } else {
          // Return false to indicate error if no email is found in profile
          return done(new Error("Google profile does not contain an email."), false);
        }
      } catch (error) {
        done(error as Error, false);
      }
    }
  )
);


