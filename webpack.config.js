module.exports = {
    entry: "./src/entry.js",
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
};