//LANSS_FITNESS/backend/src/core/constants/general/apiConstants.ts

export const APP_CONSTANTS = {
  // Token expiry times
  ACCESS_TOKEN_EXPIRES_IN: "15m", // or "900s"
  REFRESH_TOKEN_EXPIRES_IN: "7d", // or "604800s"
  OTP_EXPIRY_MINUTES: 10,
  MAX_IMAGE_SIZE_MB: 5,
  PAGINATION: {
    DEFAULT_LIMIT: 10,
    DEFAULT_PAGE: 1,
  },
  IMAGE_UPLOAD: {
    USER_DESTINATION: 'uploads/user/',
    TRAINER_DESTINATION: 'uploads/trainer/',
    ALLOWED_MIME_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  },
}
