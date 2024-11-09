
interface FormValues {
  username: string;
  email: string;
  password: string;
  phone: string;
}
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
        if (password.length < 10 || password.length > 100) {
          errors.push("Password must be between 10 and 100 characters.");
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
  
    // Aggregates errors from all fields into an array
    const validateAll = ({ username, email, password, phone}: FormValues): string[] => {
      return [
        ...validateUsername(username),
        ...validateEmail(email),
        ...validatePassword(password),
        ...validatePhone(phone)
      ];
    };
  
    return {
      validateAll,
    };
  };
  
  export default useValidation;
  