import axios from 'axios';

export const api = axios.create({
   baseURL : '/api'
   //baseURL : 'http://localhost:3000/api'
});  