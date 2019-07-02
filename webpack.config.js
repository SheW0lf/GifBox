const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: ['babel-polyfill', "./src/index.js"],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use:[
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'img',
                            name: "[name].[ext]"                        
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    { 
                        loader: "css-loader",
                        options: {
                            url: true
                        }
                    }, 
                    {
                        loader: "resolve-url-loader"
                    },
                    { 
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    resolve: { 
        extensions: ["*", ".js", ".jsx"], 
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "./js/bundle.js",
        publicPath: "/build/"
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        host: "localhost",
        port: 3000,
        hot: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};