'use strict';

var db = require('../config/db');
// var moment = require('moment');

db.run(`CREATE TABLE IF NOT EXISTS grade (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          score INTEGER,
          total INTEGER,
          grade TEXT
        )`);

exports.get = function(cb) {
  db.all('SELECT * FROM grade', cb);
};

exports.create = function(grade, cb) {

  db.run('INSERT INTO grade (name, score, total, grade) VALUES (?, ?, ?, ?)',
    grade.name,
    grade.score,
    grade.total,
    grade.grade,
    (err) => {
      if(err) return cb(err);
      db.get('SELECT * FROM grade WHERE ID = (SELECT MAX (ID) FROM grade);', cb)
    });
};

exports.findAll = function(cb) {
  db.all('SELECT * FROM grade', function(err, grade) {
    cb(err, grade);
  });
};

exports.findById = function(id, cb) {
  db.all(`SELECT * FROM grade WHERE ID = '${id}'`, function(err, grade) {
    cb(err, grade);
  });
};

exports.update = function(id, grade, cb) {
  db.run(`UPDATE grade SET name = '${grade.make}', score = '${grade.model}', total = ${grade.total}, grade = ${grade.grade}  WHERE ID = '${id}'`, cb);
};

exports.removeById = function(id, cb) {
    db.all(`DELETE FROM grade WHERE ID = '${id}'`, (err, grade) => {
    if (err) return cb (err);

    cb(err, grade);
  });
};
