const path = require('path');

const config = {
    entry: __dirname + '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'views'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    watch: true,
    devtool: 'source-map'
};

module.exports = config;