const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParse = require('body-parser');

//Middleware
app.use(bodyParse.json());
app.use(morgan('dev'))
app.use(require('./src/routes/products.routes'));

//Routes
app.use('/api/products', require('./src/routes/products.routes'));


module.exports = app;