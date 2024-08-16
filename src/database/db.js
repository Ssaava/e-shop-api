
const { MongoClient } = require('mongodb');
const url = process.env.BD_CONNECTION;

const client = new MongoClient(url);

module.exports = {client}