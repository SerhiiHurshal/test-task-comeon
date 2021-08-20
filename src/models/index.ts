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

export interface Game {
  categoryIds: number[];
  code: string;
  description: string;
  icon: string;
}

export interface Category {
  id: number;
  name: string;
}
