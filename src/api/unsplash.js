const axios = require('axios');

const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
axios.create({
    baseUrl: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID ' + UNSPLASH_ACCESS_KEY }
});

axios.get('/search/photos?query=a')
    .then(each => {
        console.log(each.data);
    }).catch(e => {
        console.log(e.response.data);
    })