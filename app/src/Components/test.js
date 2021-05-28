import { config } from './config.js';
const request = require('request');
var token = config();

finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, {}, (error, data, response) => {
    console.log(data)
});

