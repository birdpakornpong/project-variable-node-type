const path = require("path");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  devtool: "source-map",
  target: "node",
  mode: "development",
  externals: [nodeExternals()],
  entry: { index: path.resolve(__dirname, "src", "app.ts") },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },

  // file resolutions
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
