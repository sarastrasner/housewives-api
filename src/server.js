'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const DataCollection = require('./models/data-collection-class');

const unicorn = new DataCollection();
const quote = new DataCollection();

// const MONGOOSE_URI = 'mongodb://localhost:27017/animals';
const options = {useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(process.env.MONGOOSE_URI, options);

///////////////////////// ^^ new from today's demo
const express = require('express');

const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const routesUnicorns = require('./routes/unicorns')
const routesQuotes = require('./routes/quotes')

const app = express();

app.use(express.json());

app.use(logger);
app.use(routesUnicorns);
app.use(routesQuotes);

// Route
app.get('/', homeRouteHandler);

function homeRouteHandler(req, res) {
  res.status(200).send('Welcome, betch.');
}

app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
