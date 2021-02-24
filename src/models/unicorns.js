'use strict';

const mongoose = require('mongoose');

const unicornSchema = mongoose.Schema({
  name: { type: String, required: true },
  horns: { type: Number, required: true },
});

const unicornModel = mongoose.model('unicorn', unicornSchema);

module.exports = unicornModel;
