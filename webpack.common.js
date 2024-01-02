const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: "file-loader",
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};

module.exports = config;
