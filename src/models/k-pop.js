'use strict';

const mongoose = require('mongoose');

const kPopSchema = mongoose.Schema({
  name: { type: String, required: true },
  members: [
    {
      name: {type: String, required: true},
      specialty: [{
        type: String,
        enum: ['singer', 'dancer', 'rapper'],
        required: true,
      }],
      photo: { type: String, required: true },
      gender: {
        type: String,
        enum: ['male', 'female'],
        required: true,
      },
    },
  ],
});

const kPopModel = mongoose.model('kpop', kPopSchema);

module.exports = kPopModel;
