import axios from 'axios';

const api = axios.create({
  baseURL: 'https://desafionode-api.herokuapp.com',
});

export default api;
