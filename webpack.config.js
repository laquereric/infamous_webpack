var webpack = require('webpack')
module.exports = {
    entry: "./src/app.js",
    output: {
        path: './public',
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve: {
        alias: {
            // add this alias only for famous <0.3.5
            famous: 'famous/src'
        }
    }
}

