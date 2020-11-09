const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:8081',
  timeout: 5000000,
})

export default instance;