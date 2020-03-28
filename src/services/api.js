import axios from 'axios';
import { BASEURL } from '~/config/enviroments';

const api = axios.create({
  baseURL: BASEURL,
  timeout: 100000,
});

export default api;
