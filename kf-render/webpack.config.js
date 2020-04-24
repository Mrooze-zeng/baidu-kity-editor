const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = (env, { mode, port }) => {
  const isDev = mode === "development";
  return {
    mode: mode,
    entry: {
      index: path.resolve(__dirname, "./src/index.js"),
    },
    output: {
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          use: ["babel-loader"],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg|gif|woff)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8 * 1024,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      modules: ["node_modules", path.resolve(__dirname, "src/")],
      extensions: [".js", ".json", ".jsx", ".css"],
      alias: {
        "kity-graph$": path.resolve(__dirname, "../kity/dist2/index.js"),
        base: path.resolve(__dirname, "src/base"),
        char: path.resolve(__dirname, "src/char"),
        def: path.resolve(__dirname, "src/def"),
        expression: path.resolve(__dirname, "src/expression"),
        font: path.resolve(__dirname, "src/font"),
        operator: path.resolve(__dirname, "src/operator"),
        resource: path.resolve(__dirname, "src/resource"),
        Resource: path.resolve(__dirname, "src/resource"),
      },
    },
    plugins: [new CleanWebpackPlugin()],
  };
};
