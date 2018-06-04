const path = require('path');

const config = {
  target: 'node',
  entry: [
    './src/index.js',
  ],
  output: {
    filename: 'grid.bundle.js',
    libraryTarget: 'umd',
    library: 'Grid',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              // modules: true,
              // importLoaders: 2,
              alias: {
                "flexbox": "flexboxgrid/dist/flexboxgrid.css"
              }
            }
          },
          // 'postcss-loader'
        ]
      }
    ]
  }
};

module.exports = config;
