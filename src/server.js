'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const DataCollection = require('./models/data-collection-class');

const quote = new DataCollection();

const express = require('express');

const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const routesQuotes = require('./routes/quotes');
const routesKpop = require('./routes/kpop');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use(logger);
app.use(routesQuotes);
app.use(routesKpop);

app.get('/', homeRouteHandler);

function homeRouteHandler(req, res) {
  res.status(200).send('Welcome, betch.');
}

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    if (!port) {
      throw new Error('Missing Port');
    }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
