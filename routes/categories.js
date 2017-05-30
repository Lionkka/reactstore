const express = require('express');
const router = express.Router();
const connection = require('../database');


router.get('/', function (req, res, next) {

    connection.connect();


    connection.query('SELECT ??,??,?? FROM `category`',['title', 'slug', 'parent_id'], function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send(results);
    });

    connection.end();


});
router.get('/:id', function (req, res, next) {

    connection.connect();

    connection.query('SELECT ??,??,?? FROM `category` WHERE `id` = ?',['title', 'slug', 'parent_id',req.params.id ], function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send(results);
    });

    connection.end();


});

module.exports = router;

