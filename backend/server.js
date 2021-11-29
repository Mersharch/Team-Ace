//requiring express
const express = require("express");

const mongoose = require('mongoose');

require('dotenv').config();

//express app
const app = express();

//definign port
const port = process.env.PORT || 5000;

app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri);

const connection = mongoose.connection;

connection.once('open', () => console.log("MongoDB database connection established successfully"));

//listening to port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

