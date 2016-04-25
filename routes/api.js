'use strict';

var express = require('express');
var router = express.Router();

// router.use('/todos', require('./todos'));
router.use('/grades', require('./grades'));

module.exports = router;
