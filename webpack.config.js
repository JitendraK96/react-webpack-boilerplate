import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const __dirname = path.resolve();
import pkg from 'webpack';
const { EnvironmentPlugin } = pkg;

const config = () => {
  return {
    mode: 'development',
    entry: '/src/main.jsx', // main js
    output: {
      path: path.resolve(__dirname, 'build'), // output folder
      publicPath: '/',
      filename: 'bundle.js',
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    module: {
      rules: [
        {
          test: /\.?js|jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader', // for styles
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                limit: 10000,
              },
            },
          ],
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader',
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html', // base html
      }),
      new EnvironmentPlugin({
        NAME: 'GOD_PARTICAL',
      }),
    ],
  };
};

export default config;
