const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const JSON_SECRET= process.env.JSON_SECRET;

module.exports = {PORT ,MONGO_URI,JSON_SECRET };