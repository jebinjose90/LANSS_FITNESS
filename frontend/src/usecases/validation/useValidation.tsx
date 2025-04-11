//LANSS_FITNESS/frontend/src/core/usecases/useValidation.tsx
import { FormValues } from "../../core/interfaces/FormValues";

const useValidation = () => {
  // Function to validate the username
  const validateUsername = (username: string): string[] => {
    const errors: string[] = [];
    if (username !== "*") {
      if (!username) {
        errors.push("Username is required.");
      }
      else if (username.length < 3 || username.length > 20) {
        errors.push("Username must be between 3 and 20 characters.");
      }

    }
    return errors;
  };// Function to validate the trainername
  const validateTrainer = (trainername: string): string[] => {
    const errors: string[] = [];
    if (trainername !== "*") {
      if (!trainername) {
        errors.push("Trainername is required.");
      }
      else if (trainername.length < 3 || trainername.length > 20) {
        errors.push("Trainername must be between 3 and 20 characters.");
      }

    }
    return errors;
  };

  // Function to validate the email
  const validateEmail = (email: string): string[] => {
    const errors: string[] = [];
    if (email !== "*") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) {
        errors.push("Email is required.");
      } else if (!emailRegex.test(email)) {
        errors.push("Email is not valid.");
      }
    }
    return errors;
  };

  // Function to validate the password
  const validatePassword = (password: string): string[] => {
    const errors: string[] = [];
    if (password !== "*") {
      if (password.length < 10 || password.length > 20) {
        errors.push("Password must be between 10 and 20 characters.");
      }
      if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase character.");
      }
      if (!/[!@#?]/.test(password)) {
        errors.push("Password must include at least one special character, e.g., ! @ # ?");
      }
    }
    return errors;
  };

  // Function to validate the password
  const validatePhone = (phone: string): string[] => {
    const errors: string[] = [];
    if (phone !== "*") {
      if (phone.length < 10 || phone.length > 10) {
        errors.push("Phone number must contain 10 digits");
      }
    }
    return errors;
  };

  const validateWeight = (weight: string): string[] => {
    const errors: string[] = [];
    if (weight !== "*") {
      if (!weight) {
        errors.push("Weight is required");
      } else if (isNaN(Number(weight)) || Number(weight) <= 0) {
        errors.push("Enter a valid weight (positive number)");
      }
    }
    return errors;
  };


  const validateHeight = (height: string): string[] => {
    const errors: string[] = [];
    if (height !== "*") {
      if (!height) {
        errors.push("Height is required");
      } else if (isNaN(Number(height)) || Number(height) <= 0) {
        errors.push("Enter a valid height (positive number)");
      }
    }
    return errors;
  };

  const validateAge = (age: string): string[] => {
    const errors: string[] = [];
    if (age !== "*") {
      if (!age) {
        errors.push("Age is required");
      } else if (isNaN(Number(age)) || Number(age) <= 0 || Number(age) > 120) {
        errors.push("Enter a valid age (between 1 and 120)");
      }
    }
    return errors;
  };

  const validateGender = (gender: string): string[] => {
    const errors: string[] = [];
    if (!gender) {
      errors.push("Gender is required");
    }
    return errors;
  };

  const validateCertificate = (certificateUrl: string): string[] => {
    const errors: string[] = [];
    if (certificateUrl !== "*") {
      if (!certificateUrl) {
        errors.push("Certificate is required");
      }
    }
    return errors;
  };

  const validateAll = (fields: Partial<FormValues>): string[] => {
    const errors: string[] = [];

    if ('trainername' in fields) errors.push(...validateTrainer(fields.trainername!));
    if ('username' in fields) errors.push(...validateUsername(fields.username!));
    if ('email' in fields) errors.push(...validateEmail(fields.email!));
    if ('password' in fields) errors.push(...validatePassword(fields.password!));
    if ('phone' in fields) errors.push(...validatePhone(fields.phone!));
    if ('weight' in fields) errors.push(...validateWeight(fields.weight!));
    if ('height' in fields) errors.push(...validateHeight(fields.height!));
    if ('age' in fields) errors.push(...validateAge(fields.age!));
    if ('gender' in fields) errors.push(...validateGender(fields.gender!));
    if ('certificateUrl' in fields) errors.push(...validateCertificate(fields.certificateUrl!));

    return errors;
  };

  return {
    validateAll,
    fields: {
      trainername: validateTrainer,
      username: validateUsername,
      email: validateEmail,
      password: validatePassword,
      phone: validatePhone,
      weight: validateWeight,
      height: validateHeight,
      age: validateAge,
      gender: validateGender,
      certificateUrl: validateCertificate,
    },
  };
};

export default useValidation;
