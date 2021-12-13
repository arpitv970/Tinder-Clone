import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://backend-tinder-mern.herokuapp.com'
})

export default instance;