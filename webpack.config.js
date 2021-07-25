const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = (...args) => path.resolve(__dirname, 'src', ...args);
const DIST_PATH = path.resolve(__dirname, 'dist');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isProd ? 'production' : 'development',
    resolve: {
        modules: [
          path.resolve(__dirname, 'node_modules'),
          src()
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        mainFields: ['style', 'main'],
    },
    entry: src('index.js'),
    output: {
        path: DIST_PATH,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: 'babel-loader'
        }, {
            test: /\.s[ac]ss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.jpg$/,
            use: 'url-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: src('index.html'),
            filename: 'index.html'
        })
    ],
    devServer: {
        contentBase: DIST_PATH,
        hot: true,
        port: 3000,
        compress: true
    }
};