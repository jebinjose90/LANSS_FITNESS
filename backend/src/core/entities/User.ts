// backend/src/core/entities/User.ts

import { Document } from 'mongoose';

export interface User extends Document {  // Extend Document to include Mongoose properties
    username: string;
    password: string; 
    email: string;
    phone:number;
    id: string;
}