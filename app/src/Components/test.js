const finhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api-ke-here'];
api_key.apiKey = "<API_KEY>";
const finnhubClient = new finnhub.DefaultApi()
