var CleanWebpackPlugin = require("clean-webpack-plugin")
var Webpack = require('webpack');
var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

var config = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader'
            },
            {

                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]

            },
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx']
    },
    entry: ['./App.tsx'],
    output: {
        path: path.resolve(__dirname, 'wwwroot/'),
        // should use absolute path
        publicPath: '/',
        filename: '../wwwroot/static/main.js'
    },
    plugins: [
        // clean wwwroot
        new CleanWebpackPlugin([
            'static/main.js',
            'static/site.css'
        ]),
        new MiniCssExtractPlugin({ filename: "static/site.css" })
    ]
};
module.exports = config;