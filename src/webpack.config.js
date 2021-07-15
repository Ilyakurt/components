const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill","./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
    },
    
    devServer: {
        port: 3000
    },

    plugins: [
        new HTMLWebpackPlugin({}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader", 'raw-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                    presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                }
            },
        ]
    }
}