const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const _ = require('lodash');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const loginRoutes = require('./api/routes/login');

mongoose.connect('mongodb://127.0.0.1/mongoui');
mongoose.connection.on(
  'error',
  console.error.bind(console, 'connection error:')
);
mongoose.connection.once('open', function() {
  // we're connected!
  console.log('COnnected');
});

app.use(['/', '/login'], loginRoutes);

// app.use('/', loginRoutes);

// app.use((error, req, res, next) => {
//   res.status = error.status || 500;
//   res.json({
//     error: {
//       msg: error
//     }
//   });
// });

module.exports = app;
