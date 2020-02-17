const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: ['./src/script/index.js', './src/style/main.css']
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            include: path.resolve(__dirname, 'src/style'),
            use: [
                {
                  loader: MiniCssExtractPlugin.loader
                },
                'css-loader'
            ]
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              },
            }
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          include: path.resolve(__dirname, 'src/fonts'),
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.js$/,
          include: path.resolve(__dirname, 'src/script'),
          loader: 'babel-loader'
        }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html'
      }),
      new CopyWebpackPlugin([
        { from: 'src/image', to: 'image/' }
      ])
  ]
};