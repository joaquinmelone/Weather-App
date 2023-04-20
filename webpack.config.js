const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
  mode: 'development',
   entry: {
     index: './src/index.js',
     fetch: './src/fetch.js',
     weatherDivManipulation: './src/weatherDivManipulation.js',
     style: './src/style.css',
   },
   devtool: 'inline-source-map',
   devServer: {
    static: './dist',
  },
   plugins: [
     new HtmlWebpackPlugin({
      title: 'Weather App',
      template: './src/index.ejs'
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
 };