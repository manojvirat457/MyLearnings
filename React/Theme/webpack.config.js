const path = require('path');
const HtmlWebpackPlugin = require('HTML-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.[jt]sx?$/,
                use: ['babel-loader'],
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()],
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 5000,
        publicPath: "http://localhost:5000/dist",
        hotOnly: true
    }
}