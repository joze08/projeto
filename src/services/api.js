import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apiusuario.herokuapp.com',
});

export default api;
