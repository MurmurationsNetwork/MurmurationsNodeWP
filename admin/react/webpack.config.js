const { resolve } = require('path')

module.exports = (env, argv) => {
  let publicPath
  if (argv.mode === 'production') {
    publicPath = '/wp-content/plugins/MurmurationsNodeWP/admin/assets/react/'
  } else {
    publicPath = '/wp-content/plugins/murmurations-node/admin/assets/react/'
  }

  return {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: resolve(__dirname, '../assets/react'),
      filename: 'index.js',
      publicPath: publicPath
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
