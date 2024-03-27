const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { Template } = require("webpack");

module.exports = {
    entry: ".src/index.js",
    devtool: "inline-source-map",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            inject: "head",
            scriptLoading: "defer",
        })
    ] 
};