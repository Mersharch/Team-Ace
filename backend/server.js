//requiring express
const express = require("express");

//express app
const app = express();

//definign port
const port = process.env.PORT || 5000;


//listening to port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

