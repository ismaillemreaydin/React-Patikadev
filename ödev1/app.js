// app.js

import getData from './src/lib/service.js';

async function fetchDataAndLog() {
    try {
        const result = await getData(1);
        console.log(result);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

fetchDataAndLog();
