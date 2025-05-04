export interface UserState {
  username: string | null;
  imageUrl: string | null;
  profile: any;
  loading: boolean;
  error: string | null;
  userData: any;
  isUserAuthenticated: boolean;
  profileUpdateSuccess: boolean;
}