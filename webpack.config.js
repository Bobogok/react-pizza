/* eslint-disable import/no-unresolved */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

const devMode = process.env.NODE_ENV === 'development';
const prodMode = !devMode;

console.log(`isDevMode: ${devMode}`);

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  };

  if (prodMode) {
    config.minimize = true;
    config.minimizer = [
      new TerserPlugin({
        parallel: 4
      }) // This will enable CSS optimization only in production mode.
    ];
  }

  return config;
};

const cssLoaders = (extra) => {
  const loaders = [
    // devMode && require.resolve('style-loader'),
    prodMode ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader',
    'postcss-loader'
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

const plugins = () => {
  const base = [
    new HtmlWebpackPlugin(
      // eslint-disable-next-line prefer-object-spread
      Object.assign(
        {},
        {
          inject: true,
          template: 'public/index.html'
        },
        prodMode
          ? {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
              }
            }
          : undefined
      )
    ),
    new CleanWebpackPlugin()
  ];

  if (prodMode) {
    base.push(
      new RemovePlugin({
        before: {
          include: ['build']
          // parameters for "before normal compilation" stage.
        },
        watch: {
          include: ['build']
          // parameters for "before watch compilation" stage.
        },
        after: {
          // parameters for "after normal and watch compilation" stage.
        }
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'public/img'),
            to: path.resolve(__dirname, 'build/img')
          }
        ],
        options: {
          concurrency: 100
        }
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[id].[contenthash:8].chunk.css'
      })
    );
  }

  return base;
};

module.exports = {
  stats: 'normal',
  // context: path.resolve(__dirname, 'src'),
  entry: './src/index.jsx',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      reducers: path.resolve(__dirname, 'src/reducers')
    }
  },
  optimization: optimization(),
  devServer: {
    historyApiFallback: true,
    proxy: {
      context: ['/pizza'],
      target: 'http://localhost:1338'
    },
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 1337,
    open: false,
    hot: devMode
  },
  devtool: devMode ? 'source-map' : 'eval',
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          cacheCompression: false,
          compact: prodMode
        }
      },
      {
        test: /\.css$/i,
        use: cssLoaders()
      },
      {
        test: /\.s[ac]ss$/i,
        use: cssLoaders('sass-loader')
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        exclude: /node_modules/,
        use: ['url-loader', 'file-loader']
      }
    ]
  }
};
