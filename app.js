const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1/mongoui');
mongoose
  .connection
  .on('error', console.error.bind(console, 'connection error:'));
mongoose
  .connection
  .once('open', function () {
    // we're connected!
    console.log('COnnected');
  });

app.get('/login', (req, res, next) => {
  res
    .status(200)
    .json({message: 'Login Works !'});
});

// app.use((req, res, next) => {   const error = new Error('Not FOund');
// error.status = 404;   next(error); });

app.use((error, req, res, next) => {
  res.status = error.status || 500;
  res.json({
    error: {
      msg: error
    }
  });
});

module.exports = app;
