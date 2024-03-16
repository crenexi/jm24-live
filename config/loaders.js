const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { isDevelopment } = require('./environment');

const tsLoader = (() => ({
  test: /\.([cm]?ts|tsx)$/,
  use: 'ts-loader',
  exclude: /node_modules/,
}))();

const scssLoader = (() => {
  const localIdentName = isDevelopment
    ? '[name]__[local]--[hash:base64:5]'
    : '[hash:base64:5]';

  return {
    test: /\.(scss|sass|css)$/,
    exclude: /node_modules/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: { localIdentName },
          sourceMap: true,
          importLoaders: 1,
        },
      },
      {
        loader: 'sass-loader',
      },
    ],
  };
})();

module.exports = {
  tsLoader,
  scssLoader,
};
