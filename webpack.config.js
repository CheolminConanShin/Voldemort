const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
});
const CopyWebpackPluginConfig = new CopyWebpackPlugin([{from: './client/assets/' }]);

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve('www'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', exclude: /node_modules/},
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            },
            {test: /\.css$/, loader: 'style-loader!css-loader', include: /node_modules/}
        ]
    },
    devServer: {
        publicPath: "/",
        contentBase: "./www",
        historyApiFallback: true
    },
    resolve: {
      alias: {
          'webworkify$': 'webworkify-webpack-dropin'
      }
    },
    plugins: [HtmlWebpackPluginConfig, CopyWebpackPluginConfig]
}

