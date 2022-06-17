import { GET_USER_TASKS_URL, LOGIN_URL, SIGNUP_URL } from '../../constants/url';
import { apiService, authService } from '../apiService';

export const login = async data => authService(`${LOGIN_URL}`, 'POST', JSON.stringify(data));
export const signUp = async data => apiService(`${SIGNUP_URL}`, 'POST', JSON.stringify(data));
export const getUserTasks = async () =>
   apiService(`${GET_USER_TASKS_URL}`, 'GET', `Bearer ${localStorage.getItem('auth')}`);
