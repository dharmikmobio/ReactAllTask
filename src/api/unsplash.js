import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID lD3h8bKc0UG_YFGGX-_tS0aL_eb0ePi5nQaDn5UO25c'
    }
});

