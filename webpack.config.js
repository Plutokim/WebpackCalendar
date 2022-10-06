const path = require('path');
const MiniCss = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test:/\.(s*)css$/,
            use: [
                MiniCss.loader,
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new ESLintPlugin(),
        new MiniCss({
            filename: 'style.css'
        }),
        new HTMLWebpackPlugin({
            template: 'index.html'
        })
    ]
};