export interface AdminState {
  adminname: string | null;
  profile: any;
  loading: boolean;
  error: string | null;
  adminData: any;
  isAdminAuthenticated: boolean;
}