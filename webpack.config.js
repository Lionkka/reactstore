const path = require('path');

const config = {
    entry: __dirname + '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'view/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'es2015',
                        'react'
                    ],
                    plugins: []
                },
                include: [
                    path.resolve(__dirname, 'app')
                ]
            }
        ]
    }
};

module.exports = config;