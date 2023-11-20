const { resolve } = require('path')

module.exports = () => {
  return {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: resolve(__dirname, '../assets/react'),
      filename: 'index.js',
      publicPath: '/wp-content/plugins/MurmurationsNodeWP/admin/assets/react/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx'],
      fullySpecified: false
    },
    performance: {
      hints: false
    }
  }
}
