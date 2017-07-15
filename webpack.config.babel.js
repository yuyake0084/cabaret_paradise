import webpack from 'webpack';
import path from 'path';

export default {
  entry: {
    app: `${path.resolve(__dirname, './src')}/javascripts/app.js`
  },

  output: {
    path: path.resolve(__dirname, './public/dist/'),
    filename: 'javascripts/[name].bundle.js'
  },

  watch: true,

  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'es2017', 'vue']
        }
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: ['*', '.js', '.vue']
  },
}