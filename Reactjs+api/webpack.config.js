var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var DIST_PATH = path.resolve( __dirname, 'dist' );
var SOURCE_PATH = path.resolve( __dirname, 'src' );
 
module.exports = {
    entry: SOURCE_PATH + '/index.js',
    output: {
        path: DIST_PATH,   
        filename: 'index.dist.js',
        publicPath: '/'
    },  
    module: {
        loaders: [
            {
                test: /.jsx?$/,  
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        'es2015',
                        'react',
                        'stage-2'
                    ]
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                {
                  fallback: "style-loader",
                  use: "css-loader"
                }
                )
            }
        ]
    },
  plugins: [
   
    new ExtractTextPlugin("Styles.css"), 
  ]
};