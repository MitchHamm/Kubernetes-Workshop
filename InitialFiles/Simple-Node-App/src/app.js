const bodyParser = require('body-parser');
const express = require('express');
const request = require('request-promise');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;
