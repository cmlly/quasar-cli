// import something here
import Vue from 'vue';
import axios from 'axios';

const http = axios.create({
  baseURL: '/api',
  timeout: 5000
})

http.interceptors.response.use(res => {
   return res.data
})

Vue.prototype.$http = http;
// export default http;