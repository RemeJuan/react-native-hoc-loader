const webpack = require('webpack');

const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,

  entry: {
    app: './src/index.tsx',
  },

  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: {
      '~': path.join(__dirname, '../src'),
    },
  },

  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'react-native': 'react-native',
  },

  module: {
    rules: [
      {
        test: /^(?!.*\.test\.(t|j)sx?$).*\.(t|j)sx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },

    ],
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'index.js',
    library: 'react-native-hoc-loader',
    libraryTarget: 'umd',
  },
};
