import httpClient from '../http-common';

const search=(data)=>{
    console.log("data from service: " + data);
    return httpClient.post('/package/search_pkg', data);
}

export default {search}