const Webpack = require('webpack');
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const tsImportPluginFactory = require('ts-import-plugin')


const config = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [ tsImportPluginFactory({
                            libraryName: 'antd',
                            libraryDirectory: 'es',
                            style: 'css'
                        }) ]
                    }),
                },
                exclude: /node_modules/,
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
        publicPath: '/',
        filename: 'static/main.js'
    },
    plugins: [
        // clean wwwroot
        new CleanWebpackPlugin([
            'static/main.js',
            'static/site.css'
        ]),
        new MiniCssExtractPlugin({
            filename: "static/site.css"
        })
    ],
    devServer: {

        contentBase: path.resolve(__dirname, "wwwroot/static"),

        historyApiFallback: true,
        open: true,
        port: 8000,
        stats: 'errors-only',
    },
};

module.exports = config;