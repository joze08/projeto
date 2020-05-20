import axios from 'axios';

const apicall = axios.create({
  baseURL: 'http://localhost:3333'
});

export default apicall;
