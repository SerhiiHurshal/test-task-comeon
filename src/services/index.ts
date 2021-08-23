import axios, { AxiosResponse } from 'axios';
import { Category, Game, LoginResponse, Player, UserCreds } from '@models';

const base = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  validateStatus: function (status) {
    return status < 500;
  },
});

const checkUserCreds = async (creds: UserCreds): Promise<LoginResponse> => {
  try {
    const { data }: AxiosResponse<LoginResponse> = await base.post(
      '/login',
      creds,
    );

    return data;
  } catch (error) {
    console.log(error);

    return {
      status: 'fail',
      error: error.message,
    };
  }
};

const loginUser = (player: Player) => {
  if (localStorage.getItem('user')) {
    localStorage.removeItem('user');
  }

  localStorage.setItem('user', JSON.stringify(player));
};

const checkIsUserLoggedin = () => {
  const user = localStorage.getItem('user');

  if (user) {
    return JSON.parse(user) as Player;
  }

  return null;
};

const logoutUser = async (username: string) => {
  localStorage.removeItem('user');

  await base.post('/logout', { username });
};

const getGames = async () => {
  const { data }: AxiosResponse<Game[]> = await base.get('/games');

  return data;
};

const getCategories = async () => {
  const { data }: AxiosResponse<Category[]> = await base.get('/categories');

  return data;
};

export {
  checkUserCreds,
  loginUser,
  checkIsUserLoggedin,
  logoutUser,
  getGames,
  getCategories,
};
