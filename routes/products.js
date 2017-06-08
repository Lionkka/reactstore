const express = require('express');
const router = express.Router();
const connection = require('../database');

router.get('/:category', function (req, res, next) {
    if (req.params.category === 'null') {
        connection.query('SELECT * FROM `product` LIMIT 50',
            function (error, results, fields) {
                if (error) console.error(error);
                res.send(results);
            });
    }

    else {
        connection.query('SELECT ??,??,??,?? FROM `category`',
            ['id', 'title', 'slug', 'parent_id']
            , (error, results, fields) => {

                let categories = getSubcategories(results, parseInt(req.params.category), []);
                categories.push(parseInt(req.params.category));

                connection.query('SELECT ??,??,??,??,??,??,?? FROM `product` WHERE `category_id` IN (' + categories.join(',') + ')',
                    ['id', 'title', 'slug', 'description', 'price', 'imageUrl', 'category_id'],
                    function (error, results, fields) {
                        if (error) console.error(error);
                        res.send(results);
                    });

            });
    }


});

function getSubcategories(categories, needle, result) {
    categories.forEach((item, index) => {
        if (item.parent_id === needle) {
            result.push(item.id);
            getSubcategories(categories.slice(index), item.id, result);
        }
    });
    return result.sort();
}

module.exports = router;

