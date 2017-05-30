const express = require('express');
const router = express.Router();
const connection = require('../database');

router.get('/', function (req, res, next) {

    connection.connect();
    let categories = {
        'Computers and notebooks': {
            'Notebooks': {
                'Macbooks': 'Macbooks',
                'Asus notebooks': 'Asus',
                'HP notebooks': 'HP'
            },
            'Tablets': {
                'IPads': 'IPads',
                'Asus tablets': 'Asus',
                'HP tablets': 'HP'
            },
            'Computers': {
                'IMacs': 'IMacs',
                'Asus computers': 'Asus',
                'HP computers': 'HP'
            }
        },
        'Appliances': {
            'Large home appliances': {
                'Refrigerators': {
                    'Two-chamber': 'Two-chamber',
                    'Side-by-side': 'Side-by-side',
                    'Refrigerators for wine': 'Refrigerators for wine'
                },
                'Stoves': {
                    'Gas stoves': 'Gas stoves',
                    'Electric stoves': 'Electric stoves'
                },
                'Washing machines': 'Washing machines'
            },
            'Air conditioning equipment': 'Air conditioning equipment',
            'Small household appliances': 'Small household appliances'
        }
    };

    generateCatProducts(categories, connection);



    res.send('respond with a resource');
});

module.exports = router;

function generateCatProducts(categories, connection, mainCat = 0) {
    for (let item in categories) {

        connection.query('INSERT INTO `category`(??, ??, ??) VALUES (?, ?, ?);',
            ['title', 'slug', 'parent_id',
                item, item.replace(' ', '_'), mainCat]
            , function (error, results, fields) {
                if (error) console.log(error);

                if (categories[item] instanceof Object) {
                    generateCatProducts(categories[item], connection, results.insertId)
                }
                else {
                    let selectedCat = results.insertId;
                    for(let i=0; i<5; i++){
                        connection.query('INSERT INTO `product`(??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?);',
                            ['title', 'slug', 'description','price', 'imageUrl', 'category_id',
                                'prod '+ i +' '+ item,
                                'prod_'+ i + '_'+item.replace(' ', '_'),
                                'description '+i + ' ' + item,
                                i + 100 + selectedCat,
                                'https://dummyimage.com/1024/fff/0011ff.png&text='+item.replace(' ', '_') + i,
                                selectedCat ]
                            ,(error, results, fields)=>{
                                if (error) console.log(error);
                                console.log('add product to', item,'id: ', selectedCat);
                            })
                    }
                }
            });




    }
}
