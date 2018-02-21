/**
 * Created by Serenity on 2017/11/8.
 */
const glob = require('glob');
const path = require('path');

const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const targetScript = path.join(__dirname, 'src', 'js');
let entries = function () {
    let files = glob.sync(targetScript + '/*.{js,jsx}');
    console.log(files);
    let map = {};
    for(let i=0;i<files.length;i++){
        var pathname = files[i];
        var filename = pathname.substring(pathname.lastIndexOf('\/')+1,pathname.lastIndexOf('.'));
        map[filename] = pathname;
    }
    return map;
};
module.exports = {
    entry: entries(),
    output: {
        path: __dirname + '/build/js',
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpg?e|gif)/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: {
                                limit: 8192
                            }
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 2
        }),
        new ExtractTextPlugin('./css/[name].css'),
        new htmlWebpackPlugin({
            template: "./index.html"
        })
    ]
}