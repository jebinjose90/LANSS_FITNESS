export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  imageUrl: string
  token: string
  username: string
}
