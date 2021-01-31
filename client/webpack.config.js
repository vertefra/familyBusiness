const path = require('path')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: [/node_modules/, /dist/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        port: 9000,
    },

    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin()],
    },

    watchOptions: {
        ignored: [path.posix.resolve(__dirname, './node_modules')],
    },
    mode: 'development',
    devtool: 'source-map',

    plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
}
