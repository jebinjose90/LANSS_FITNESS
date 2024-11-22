// backend/src/modules/Trainer/security/TrainerPassport.ts

import passport from 'passport';
import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth20';
import TrainerModel from '../models/TrainerModel';

passport.serializeUser((trainer, done) => {
  done(null, (trainer as any)._id); // Store only the Trainer ID in the session
});

passport.deserializeUser(async (id, done) => {
  try {
    const trainer = await TrainerModel.findById(id);
    done(null, trainer); // Retrieve the Trainer from the database using the ID
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
      callbackURL: process.env.TRAINER_GOOGLE_CALLBACK_URL!,
    },
    async (accessToken, refreshToken, profile: Profile, done) => {
      try {
        const existingTrainer = await TrainerModel.findOne({ googleId: profile.id });
        if (existingTrainer) return done(null, existingTrainer);

        // Check if profile.emails is defined
        if (profile.emails && profile.emails.length > 0) {
          const newTrainer = await TrainerModel.create({
            googleId: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName,
            // Add other required fields here
            profilePictureUrl: profile._json.picture || '', // Assuming Google profile returns picture URL
            isGoogleAuth: true, // Setting the isGoogleAuth field to true
            phone: '', // You can set a default value or handle this based on your application logic
            password: '', // Set a default password or handle accordingly
            trainername: profile.displayName, // Use the Google display name as the Trainername or customize as needed
          });

          return done(null, newTrainer);
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


