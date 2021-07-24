const fs = require('fs');
const path = require('path');

const src = (...args) => {path.resolve(__dirname, 'src', ...args)};
const DIST_PATH = path.resolve(__dirname, 'dist');

module.exports = {
    mode: 'development',
    entry: src('index.js'),
    output: {
        path: DIST_PATH,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }],
    },
    plugins: []
};