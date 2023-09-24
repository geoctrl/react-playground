const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => ({
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    chunkFilename: "[name].[contenthash].js",
  },
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /main\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: ["src/styles"],
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.ejs",
      templateParameters: {},
    }),
  ],

  devServer: {
    port: 3000,
    open: true,
    static: {
      directory: path.join(__dirname, "build"),
    },
    historyApiFallback: {
      index: "/",
    },
  },
});
