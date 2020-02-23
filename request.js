const axios = require('axios');


/**
 * 
 * @param {string} url 
 * @returns {Response}
 */
const getRequestUrlContent = async (url) => {
    const response = {
        url: url,
        content: '',
        error: '',
    };
    try {
        const content = await axios.get(url);
        response.content = content;
        response.status = 'completed'
        
    } catch(error) {
        response.error = 'error';
    }
    return response;
}
  /**
     * @async
     * @param {string[]} urls 
     * @returns {Promise<Response[]>} promise of response
     */
    async function multiFetchUrl(urls)  {
        const requests = urls.map(url => {
            return getRequestUrlContent(url);
        })
    
        return Promise.all(requests);
    }

const request = {
    multiFetchUrl,
}

module.exports = request;

