//Express
const express = require('express');

const app = express();

//URL
const port = process.env.PORT || 2001;
const url = `http://localhost:${port}`;

app.use('/', express.static('dist'));

//Finished
app.listen(port);
console.log(`Server is running at ${url}`);
