const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: __dirname + '/src/js/script.js'
    },
    output: {
        path: __dirname + '/build',
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: "css-loader"
                })
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                use:[
                    {
                        loader: "url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]"
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin('[name].css'),
        new htmlWebpackPlugin({
            title: "58",
            template: __dirname + '/src/index.html'
        })
    ]
}