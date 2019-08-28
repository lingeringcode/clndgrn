// NOTE: To use this example standalone (e.g. outside of deck.gl repo)
// delete the local development overrides at the bottom of this file
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: {
    app: './app.js' //Start webpacker here
  },
  output: {
    path: path.resolve(__dirname, ""), //Unpack here
    publicPath: '/',
    filename: 'app.js', //Unpack as this file
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
