// backend/src/utils/verification/otpGenerator.ts
import randomstring from 'randomstring';

export const generateOtp = (length = 4): string => {
    return randomstring.generate({
        length,
        charset: 'numeric'
    });
};