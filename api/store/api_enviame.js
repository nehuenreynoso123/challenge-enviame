const axios = require('axios');
const config = require('../config');
const URL_BASE = config.apiEnviame.baseUrl;
const API_KEY = config.apiEnviame.apiKey; 

const headers= {
    'Accept':'application/json',
    'api-key': API_KEY,
    'Content-Type':'application/json'
};

console.log(headers)
const apiInstance = axios.create({
    baseURL: URL_BASE,
    headers
}) 

async function insert(table,data){
    return await apiInstance.post(`/${table}`,data)
    
}

module.exports={insert}