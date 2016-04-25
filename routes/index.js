'use strict';

var express = require('express');
var router = express.Router();

// var moment = require('moment');
var Grade = require('../models/grade');

//  GET /
router.get('/', (req, res) => {
  Grade.get((err, grades) => {
    if(err) {
      res.render('error', {error: err})
    } else {
      res.render('home', {grades: grades});
    }
  })
})

module.exports = router;
