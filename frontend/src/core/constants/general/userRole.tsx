// frontend/src/core/constants/general/userRole.ts

export const UserRole = {
  ADMIN: 'admin',
  TRAINER: 'trainer',
  USER: 'user',
} as const;

// 👇 Export a proper union type
export type UserRoleType = (typeof UserRole)[keyof typeof UserRole];
