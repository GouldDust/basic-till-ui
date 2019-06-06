import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.testeposnowhq.com/api/v4/Product/'
});

instance.interceptors.request.use(config => {
    config.headers.common['Authorization'] = 'Basic RURFQ0NFMTQzOTExNDMzQ0EzQTYyNjAyQzc4RTIzNTE6NDFDMEI2NzkxN0Q5NEQ1NUJGQ0JBRjYzREJFMThCM0Y=';
    return config;
  });

export default instance;