'use strict';

const express = require('express');

const Kpop = require('../models/data-collection-class');
const models = require('../models/k-pop')
const kpop = new Kpop(models);

const router = express.Router();

// Route Declarations
router.get('/kpop', getKpop);
router.get('/kpop/:id', getOneKpop);
router.post('/kpop', createKpop);
router.put('/kpop/:id', updateKpop);
router.delete('/kpop/:id', deleteKpop);

// Route Handlers
function getKpop(req, res) {
  kpop.get()
    .then((result) => {
      (res.status(200).json(result))});}

function getOneKpop(req, res) {
  const id = req.params.id;
  kpop.get(id)
    .then((result) => {
      (res.status(200).json(result))});}

function createKpop(req, res) {
  let obj = req.body;
  kpop.create(obj)
    .then((result) => {
      (res.status(200).json(result))});
}

function updateKpop(req, res) {
  const id = req.params.id;
  const obj = req.body;
  kpop.update(id, obj)
    .then((result) => {
      (res.status(200).json(result))});}

function deleteKpop(req, res) {
  let id = req.params.id;
  kpop.delete(id)
    .then((result) => {
      (res.status(200).json(result))});}


module.exports = router;
