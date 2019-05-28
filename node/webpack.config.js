var webpack = require("webpack");
var path = require("path");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

process.noDeprecation = true

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'dist', 'assets'),
        filename: "bundle.js",
        sourceMapFilename: 'bundle.map'
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-0', 'react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader', {
                    loader: 'postcss-loader',
                    options: {
                      plugins: () => [require('autoprefixer')]
                    }}]
            },
            {
                test: /\.scss/,
                use: ['style-loader','css-loader', {
                    loader: 'postcss-loader',
                    options: {
                      plugins: () => [require('autoprefixer')]
                    }}, 'sass-loader']
            }
        ]
    },
    optimization: {
        minimizer: [
                 new UglifyJSPlugin({
                     uglifyOptions: {
                         output: {
                             comments: false
                         },
                         compress: {
                            //  warnings: false,
                             drop_debugger: true,
                             drop_console: true
                         }
                     }
                 }),
        ]
    },
    mode:"development"
}
