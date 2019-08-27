// NOTE: To use this example standalone (e.g. outside of deck.gl repo)
// delete the local development overrides at the bottom of this file

const webpack = require('webpack');

const CONFIG = {
  mode: 'production',
  entry: {
    app: './app.js'
  },
  output: {
    path: './',
    publicPath: './',
    library: 'App'
  },
  module: {
    rules: [
      {
        // Transpile ES6 to ES5 with babel
        // Remove if your app does not use JSX or you don't need to support old browsers
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        options: {
          presets: ['@babel/preset-react']
        }
      }
    ]
  }
};

// This line enables bundling against src in this repo rather than installed module
// module.exports = env => (env ? require('../../webpack.config.local')(CONFIG)(env) : CONFIG);
