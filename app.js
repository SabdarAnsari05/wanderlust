const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}


app.get('/', (req, res) => {
    res.send("I am root");
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});