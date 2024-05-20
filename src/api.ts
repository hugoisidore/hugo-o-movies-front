import axios from 'axios';
import { LoginCredentials, SignupCredentials } from './@types/Credentials';

const instanceAxios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export async function login(credentials: LoginCredentials) {
  const response = await instanceAxios.post('/auth/login', credentials);
  return response;
}
export async function signup(credentials: SignupCredentials) {
  const response = await instanceAxios.post('/auth/signup', credentials);
  return response;
}

export function addTokenJWTToAxiosInstance(token: string) {
  instanceAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export async function getMovieById(id: string) {
  const response = await instanceAxios.get(`/movie/${id}`);
  return response;
}