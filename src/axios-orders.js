import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-d1780.firebaseio.com/' 
});

export default instance;