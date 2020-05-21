import axios from 'axios';

const apicall = axios.create({
  baseURL: 'https://apiusuario.herokuapp.com'
});

export default apicall;
