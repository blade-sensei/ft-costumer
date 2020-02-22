const axios = require('axios');

async function getRequestUrlContent(url) {
    const response = {
        url: url,
        content: '',
        error: '',
    };
    try {
        const content = await axios.get(url);
        response.content = content;
        
    } catch(error) {
        response.error = 'error';
    }
    return response;
}

async function multiFetchUrl(urls) {
    const requests = urls.map(url => {
        return getRequestUrlContent(url);
    })

    return Promise.all(requests);
}


module.exports = {
    multiFetchUrl,
}