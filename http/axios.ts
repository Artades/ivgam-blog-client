import axios from 'axios';
import cookie from 'cookie';

axios.defaults.baseURL = process.env.api_url;

axios.interceptors.request.use(async (config) => {
  if (typeof window !== 'undefined') {
    const cookies = cookie.parse(document.cookie);
    const _token = cookies.accessToken;
    config.headers.Authorization = 'Bearer ' + _token;
  }
  return config;
});

export default axios;
