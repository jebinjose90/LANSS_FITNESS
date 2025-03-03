const userEndUrls = {
    login: `/signin`,
    loginWithGoogle: `/auth/user/google`,
    signup: `/signup/request-otp`,
    requestResendOtp: `/request-resend-otp`,
    logout: `/logout`,
    verifyOtp: `/signup/verify-otp`,
    resetPassword: `/reset-password`,
    verifyEmail: `/verify-email`,
    homeData: `/home`,
    profileData: `/profile`,
    submitBMI: `/calculate-bmi`,
}
export default userEndUrls;