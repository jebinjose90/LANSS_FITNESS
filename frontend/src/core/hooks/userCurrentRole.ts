// frontend/src/core/hooks/useCurrentRole.ts

import { UserRoleType } from "../constants/general/userRole";

const useCurrentRole = (): UserRoleType | null => {
  return localStorage.getItem('role') as UserRoleType | null;
};

export default useCurrentRole;
