import axios from 'axios';
import { BASEURL } from '~/config/enviroments';

const api = axios.create({
  baseURL: '',
  timeout: 100000,
});

export default api;
