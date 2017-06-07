const express = require('express');
const router = express.Router();
const connection = require('../database');

router.get('/', function (req, res, next) {

    connection.query('SELECT ??,??,??,?? FROM `category`', ['id', 'title', 'slug', 'parent_id'],
        function (error, results, fields) {
            if (error) throw error;
            res.send(results);
        });
});

module.exports = router;

