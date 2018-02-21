/**
 * Created by Serenity on 2017/11/7.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: __dirname + "/Script/app.js"
    },
    output:{
        path: __dirname + "/build/",
        filename: "[name].js"
    },
    devServer: {
        port: "8080",
        host: "localhost",
        inline: true,
        contentBase: __dirname + '/build',
        watchContentBase: true,
        compress: true
    },
    module: {
        rules: [
            {
                test: /\.js$/
            },
            {
                use: ["babel-loader"]
            }

        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js'
        })
    ]
};