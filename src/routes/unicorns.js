'use strict';

const express = require('express');

const Unicorns = require('../models/data-collection-class');
const models = require('../models/unicorns')
const unicorns = new Unicorns(models);

const router = express.Router();

// Route Declarations
router.get('/unicorns', getUnicorns);
router.get('/unicorns/:id', getOneUnicorn);
router.post('/unicorns', createUnicorn);
router.put('/unicorns/:id', updateUnicorn);
router.delete('/unicorns/:id', deleteUnicorn);

// Route Handlers
function getUnicorns(req, res) {
  let allUnicorns = unicorns.get()
    .then((result) => {
      (res.status(200).json(result))});
}


function getOneUnicorn(req, res) {
  const id = req.params.id;
  let theUnicorn= unicorns.get(id)
    .then((result) => {
      (res.status(200).json(result))});
}

function createUnicorn(req, res) {
  let obj = req.body;
  let newUnicorn = unicorns.create(obj)
    .then((result) => {
      (res.status(200).json(result))});
}

function updateUnicorn(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedUnicorn = unicorns.update(id, obj)
    .then((result) => {
      (res.status(200).json(result))});
}

function deleteUnicorn(req, res) {
  let id = req.params.id;
  let deletedUnicorn = unicorns.delete(id)
    .then((result) => {
      (res.status(200).json(result))});}


module.exports = router;
