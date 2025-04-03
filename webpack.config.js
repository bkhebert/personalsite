const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// simplifies creation of HTML files to serve your webpack bundles
// does this by creating HTML files automatically in your output directory
//
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); 
// CleanWebpackPlugin removes all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const CLIENT_DIR = path.resolve(__dirname, 'src', 'client');
// this points to the client directory, __dirname brings us to this file, 
// ex. src & client bring us to the client directory

module.exports = {
    mode: 'development', // or 'production'
    entry: path.resolve(CLIENT_DIR, 'index.jsx'), // where to begin bundling
    output: {
        path: path.resolve(__dirname, 'dist'), // bundled output file location
        publicPath: '/', // specifies the base path for all assets within your application
        filename: 'bundle.js', // bundled output file name
    },
    module: {
        rules: [
            { // For pixi.js node modules
                test: /\.(m?js)$/,
                type: 'javascript/auto',
                resolve: {
                  fullySpecified: false,
                }
            },
            {
                test: /\.(png|jpg|gif|mp3|aac|ogg|ico)$/,
                type: 'asset/resource',
                generator: {
                  filename: 'assets/[name][ext]'
                }
            },
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
            {
                // css processing
                test: /\.css$/, // tests file types ending in .less or .css
                use: [
                  "style-loader", //! NOT SECURE FOR LIVE PROD ENV
                  "css-loader", // takes the CSS files and returns the files with imports and url(...) resolved
                ],
              },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(CLIENT_DIR, 'index.html'), // Custom template
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