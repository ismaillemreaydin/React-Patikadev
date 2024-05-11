// src/lib/service.js

import axios from 'axios';

async function getData(userId) {
    try {
        const userDataResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userPostsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        
        const userData = userDataResponse.data;
        const userPosts = userPostsResponse.data;
        
        const combinedData = {
            ...userData,
            posts: userPosts
        };
        
        return combinedData;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export default getData;
