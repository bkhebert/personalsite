const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // or 'production'
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/index.html',
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3000,
        open: true,
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
};