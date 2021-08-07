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
        alias: {
            '@/': src(),
            '@/common': src('common'),
            '@/comoponents': src('comoponents'),
            '@/containers': src('containers'),
        }
    },
    entry: src('index.ts'),
    output: {
        path: DIST_PATH,
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.[tj]sx?$/,
            use: 'babel-loader'
        }, {
            test: /\.s[ac]ss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.jpg$/,
            use: 'url-loader'
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: src('asserts', 'index.html'),
            filename: 'index.html'
        })
    ],
    devServer: {
        contentBase: DIST_PATH,
        hot: true,
        port: 3000,
        compress: true,
        open: true,
        historyApiFallback: true
    }
};