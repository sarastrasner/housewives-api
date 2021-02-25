'use strict';

const mongoose = require('mongoose');

const housewifeSchema = mongoose.Schema({
  quote: { type: String, required: true },
  housewife: { type: String, required: true },
  franchise: { type: String, required: true },
});

const housewifeModel = mongoose.model('quote', housewifeSchema);

module.exports = housewifeModel;
