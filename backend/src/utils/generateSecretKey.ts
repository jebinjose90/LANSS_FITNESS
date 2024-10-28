// backend/src/utils/generateSecretKey.ts

import { randomBytes } from 'crypto';

export function generateSecretKey(length = 32): string {
    return randomBytes(length).toString('hex');
}

// Run this script once to generate your key, then save it to your .env file
const secretKey = generateSecretKey();
console.log("Your JWT Secret Key:", secretKey);


/*-----------------to exicute this file----------------*/

// run the below code in terminal

// ts-node backend/src/utils/generateSecretKey.ts

// copy and pase the new key to your .env 