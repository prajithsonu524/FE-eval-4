import axios from "axios";
import { CONTENT_BACKEND_URL } from "../../constants/apiEndPoints";


export const makeRequest = async (apiEndpoint, dynamicConfig) => {
    const request = {
        method: apiEndpoint.method,
        baseURL: CONTENT_BACKEND_URL,
        url: apiEndpoint.url,
        ...dynamicConfig,

    };
    console.log('posts', request);
    const { data } = await axios(request);

    return data;

}