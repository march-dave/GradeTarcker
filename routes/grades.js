'use strict';

var express = require('express');
var router = express.Router();

var Grade = require('../models/grade');

//   /api/todos
router.route('/')
  .get((req, res) => {

    Grade.get((err, grades) => {
      if(err) {
        return res.status(400).send(err);
      }
      res.send(grades);
    });
  })
  .post((req, res) => {
    // req.body  -->  { desc: ??, dueDate: ?? }
    Grade.create(req.body, (err, newGrade) => {
      if(err) {
        return res.status(400).send(err);
      }
      res.send(newGrade);
    });
  });

  // delete
  router.delete('/:id', (req, res) => {
    var id = req.params.id;
    Grade.removeById(id, function(err, grade) {
      if(err) return res.status(400).send(err);
      res.send(grade);
    });
  });

  // update
  router.put('/:id', (req, res) => {
    var id = req.params.id;
    Grade.update(id, req.body, (err, grade) => {
        if(err) return res.status(400).send(err);
        res.send(grade);
    });
  });

module.exports = router;
