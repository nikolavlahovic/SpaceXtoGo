import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://api.spacexdata.com/v4',
});
