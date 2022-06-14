import { SIGNUP_URL } from '../../constants/url';
import { apiService } from '../apiService';

export const login = async ({ authData }) =>
   apiService(`${SIGNUP_URL}.json`, 'POST', JSON.stringify(authData));
