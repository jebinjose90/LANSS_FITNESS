const useValidation = () => {
    // Function to validate the username
    const validateUsername = (username: string): string[] => {
      const errors: string[] = [];
      if (!username) {
        errors.push("Username is required.");
      }
      if (username.length < 3 || username.length > 20) {
        errors.push("Username must be between 3 and 20 characters.");
      }
      return errors;
    };
  
    // Function to validate the email
    const validateEmail = (email: string): string[] => {
      const errors: string[] = [];
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) {
        errors.push("Email is required.");
      } else if (!emailRegex.test(email)) {
        errors.push("Email is not valid.");
      }
      return errors;
    };
  
    // Function to validate the password
    const validatePassword = (password: string): string[] => {
      const errors: string[] = [];
      if (password.length < 10 || password.length > 100) {
        errors.push("Password must be between 10 and 100 characters.");
      }
      if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase character.");
      }
      if (!/[!@#?]/.test(password)) {
        errors.push("Password must include at least one special character, e.g., ! @ # ?");
      }
      return errors;
    };
  
    // Aggregates errors from all fields into an array
    const validateAll = (username: string, email: string, password: string): string[] => {
      return [
        ...validateUsername(username),
        ...validateEmail(email),
        ...validatePassword(password),
      ];
    };
  
    return {
      validateAll,
    };
  };
  
  export default useValidation;
  