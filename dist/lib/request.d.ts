export default Request;
declare class Request {
    /**
    * @async
    * @param {string[]} urls
    */
    async multiFetchUrl(urls: string[]): Promise<any>;
}
