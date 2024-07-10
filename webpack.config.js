const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");
const CopyWebpackPlugin = require("copy-webpack-plugin");

function getHtmlPlugins() {
  const htmlFiles = glob.sync("./src/pages/**/*.html");

  return htmlFiles.map((htmlFile) => {
    const fileName = path.basename(htmlFile);

    return new HtmlWebpackPlugin({
      template: htmlFile,
      filename: fileName,
      inject: "body",
    });
  });
}

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/, // Match both SCSS and CSS files
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name].[contenthash][ext]", // Output path for images
        },
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, // Convert images < 8kb to base64 strings
              name: "images/[name].[ext]", // Output path for images
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: "" }, // Copy everything from public to the root of the output directory
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Specify the path to your HTML template
      filename: "index.html", // Output HTML filename
    }),
    ...getHtmlPlugins(),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    hot: true, // Enable Hot Module Replacement
  },
};
