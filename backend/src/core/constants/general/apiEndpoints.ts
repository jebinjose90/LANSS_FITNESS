//LANSS_FITNESS/backend/src/core/constants/general/apiEndpoints.ts

export const API_ENDPOINTS = {
  USER: {
    BASE: '/api/user',
    LOGIN: '/api/user/login',
    REGISTER: '/api/user/register',
    VERIFY_OTP: '/api/user/verify-otp',
    BMI: '/api/user/bmi',
    PROFILE_IMAGE_UPLOAD: '/api/user/upload-image',
  },
  TRAINER: {
    BASE: '/api/trainer',
    LOGIN: '/api/trainer/login',
    REGISTER: '/api/trainer/register',
    PROFILE_IMAGE_UPLOAD: '/api/trainer/upload-image',
  },
  ADMIN: {
    BASE: '/api/admin',
    DASHBOARD: '/api/admin/dashboard',
  },
  THEME: {
    BASE: '/api/theme',
    GET_ALL: '/api/theme/all',
    CREATE: '/api/theme/create',
  },
}
