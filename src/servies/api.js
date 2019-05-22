import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/',
});

export const key = 'AIzaSyA374q5XxX6FFnJkHEOsQkLqhx9an3ZqLY';

export default api;
