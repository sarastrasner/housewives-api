'use strict';

const express = require('express');

const Quotes = require('../models/data-collection-class');
const models = require('../models/quotes')
const quotes = new Quotes(models);

const router = express.Router();

// Route Declarations
router.get('/quotes', getQuotes);
router.get('/quotes/:id', getOneQuote);
router.post('/quotes', createQuote);
router.put('/quotes/:id', updateQuote);
router.delete('/quotes/:id', deleteQuote);

// Route Handlers
function getQuotes(req, res) {
  let allquotes = quotes.get()
    .then((result) => {
      (res.status(200).json(result))});}

function getOneQuote(req, res) {
  const id = req.params.id;
  let theQuote = quotes.get(id)
    .then((result) => {
      (res.status(200).json(result))});}

function createQuote(req, res) {
  let obj = req.body;
  let newQuote = quotes.create(obj)
    .then((result) => {
      (res.status(200).json(result))});
}

function updateQuote(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedQuote = quotes.update(id, obj)
    .then((result) => {
      (res.status(200).json(result))});}

function deleteQuote(req, res) {
  let id = req.params.id;
  let deletedQuote = quotes.delete(id)
    .then((result) => {
      (res.status(200).json(result))});}


module.exports = router;
