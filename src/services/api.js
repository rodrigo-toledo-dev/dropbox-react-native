import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ominweek-backend.herokuapp.com'
});

export default api;