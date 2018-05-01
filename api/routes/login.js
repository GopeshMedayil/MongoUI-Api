const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const _ = require('lodash');

router.get(['/', '/login'], (req, res, next) => {
  res.status(200).json({ msg: 'Handling GET login request' });
});

router.post(['/', '/login'], (req, res, next) => {
  var body = { username: req.body.username, password: req.body.password };
  var user = new User(body);
  user
    .save()
    .then(user => {
      console.log('');
      res.status(200).json({ msg: 'user saved successfully' });
    })
    .catch(e => {
      console.log('error', e);
      res.status(400).send(e);
    });
});

module.exports = router;
