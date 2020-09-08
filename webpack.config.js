const path = require('path');

module.exports = (_, argv) => {
  const
    isDev = argv.mode === 'development'
  return {
    entry: {
      grid: './test/grid.js',
    },
    output: {
      path: path.resolve('./test'),
      filename: '[name].min.js'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          ]
        }
      ]
    },
    watch: isDev,
    devtool: 'source-map',
    optimization: {
      minimize: !isDev
    }
  }
}