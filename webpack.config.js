const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
      },
      devServer: {
        port: "9500",
        static: ["./public"],
        open: true,
        hot: true ,
        liveReload: true
    },
      plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
      resolve:{
        extensions: ['.js','.jsx','.json'] 
      },
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(js|jsx)$/,   
            exclude: /node_modules/, 
            use:  'babel-loader'
        }
        ],
      },
}