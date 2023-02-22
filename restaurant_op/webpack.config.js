const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        // https://webpack.js.org/loaders/css-loader/
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        // https://v4.webpack.js.org/loaders/file-loader/
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  }
};