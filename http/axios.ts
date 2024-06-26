import axios from 'axios';
import cookie from 'cookie';

axios.defaults.baseURL = 'http://localhost:4000/api';


// axios.interceptors.request.use(
//   (context) => {}
// ))
axios.interceptors.request.use(async (config) => {
  if (typeof window !== 'undefined') {
    const cookies = cookie.parse(document.cookie);
    const _token = cookies.accessToken;
    config.headers.Authorization = 'Bearer ' + _token;
  }
  return config;
});

export default axios;
