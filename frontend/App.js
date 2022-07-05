const express = require ('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://regis94:A@zerty678@atypikhouse.sbxv1hu.mongodb.net/?retryWrites=true&w=majority', 
{
  useNewUrlParser: true, useUnifiedTopology: true
})
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((e) => {
    console.log("Error while DB connecting");
    console.log(e);
  });

  module.exports = app;

