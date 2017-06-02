const express = require('express');
const router = express.Router();
const connection = require('../database');
connection.connect();

router.get('/:id', function (req, res, next) {

    connection.query('SELECT ??,??,?? FROM `category` WHERE `parent_id` = ?', ['title', 'slug', 'parent_id', req.params.id],
        function (error, results, fields) {
            if (error) throw error;
            res.send({
                parent: req.params.id,
                categories: results
            });
        });
});

module.exports = router;

