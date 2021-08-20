export interface UserCreds {
  username: string;
  password: string;
}

export interface Player {
  name: string;
  avatar: string;
  event: string;
}

export interface LoginResponse {
  status: 'success' | 'fail';
  player?: Player;
  error?: string;
}
