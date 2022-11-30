import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.12.7:3333/',
});
export {api};
