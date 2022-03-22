const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { web } = require('webpack');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Webpack Example App',
      header: 'Webpack Example Title',
      metaDesc: 'Webpack Example Description',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  target: web,
  mode: 'development',
  output: {
    clean: true
  },
  devServer: {
    liveReload: true,
    open: true
  }
};
