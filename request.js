
import * as axios from 'axios';

const getRequestUrlContent = async (url) => {
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

class Request {
     /**
     * @async
     * @param {string[]} urls 
     */
    async multiFetchUrl(urls)  {
        const requests = urls.map(url => {
            return getRequestUrlContent(url);
        })
    
        return Promise.all(requests);
    }

}

export default Request;