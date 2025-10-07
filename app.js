const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');

app.get('/', (req, res) => {
    res.send("I am root");
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});