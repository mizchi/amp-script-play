const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
// const WorkerPlugin = require("worker-plugin");

module.exports = {
  entry: {
    hello: path.join(__dirname, "src/index.tsx"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json", ".mjs", ".wasm"],
  },
  plugins: [
    new HTMLPlugin({
      inject: false,
      template: path.join(__dirname, "src/index.html"),
    }),
  ],
  devtool: false,
};
