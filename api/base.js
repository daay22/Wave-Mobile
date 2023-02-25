import axios from "axios";


const http = axios.create({
    baseURL: 'https://foobar-app-backend.herokuapp.com/',
    timeout: 1000
  });


  export default http;