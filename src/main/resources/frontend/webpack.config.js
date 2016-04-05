var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry:{
            bundleApp:'./client/client.js',
            hotload:'webpack-hot-middleware/client',
            vendors: ['react']
        }
    ,
    output: {
        path: path.resolve("./dist"),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015', 'react-hmre']
                }
            }
        ]
    }
}
