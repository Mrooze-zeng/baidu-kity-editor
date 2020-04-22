const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = (env, { mode, port }) => {
  const isDev = mode === "development";
  return {
    mode: mode,
    entry: {
      demo: path.resolve(__dirname, "./src/demo.js"),
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
        lib: path.resolve(__dirname, "lib"),
        "dev-lib": path.resolve(__dirname, "dev-lib"),
        base$: path.resolve(__dirname, "src/base"),
        control$: path.resolve(__dirname, "control"),
        def$: path.resolve(__dirname, "def"),
        editor$: path.resolve(__dirname, "editor"),
        "kf-ext$": path.resolve(__dirname, "src/kf-ext"),
        parse$: path.resolve(__dirname, "src/parse"),
        position$: path.resolve(__dirname, "src/position"),
        print$: path.resolve(__dirname, "src/print"),
        render$: path.resolve(__dirname, "src/render"),
        syntax$: path.resolve(__dirname, "src/syntax"),
        ui$: path.resolve(__dirname, "src/ui"),
        kity$: path.resolve(__dirname, "src/kity"),
        font$: path.resolve(__dirname, "src/font"),
        char$: path.resolve(__dirname, "src/char"),
        expression$: path.resolve(__dirname, "src/expression"),
        operator$: path.resolve(__dirname, "src/operator"),
        impl$: path.resolve(__dirname, "src/impl"),
        "kity-parser$": path.resolve(__dirname, "src/kity-parser"),
        "kity-render$": path.resolve(__dirname, "src/kity-render"),
        assets: path.resolve(__dirname, "./assets"),
        Assets: path.resolve(__dirname, "./assets"),
        Resource: path.resolve(__dirname, "./resource"),
        Lange: path.resolve(__dirname, "./src/lang"),
      },
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./index.html"),
      }),
    ],
    ...(isDev
      ? {
          devServer: {
            host: "0.0.0.0",
            port: 8080,
            hot: true,
          },
        }
      : {}),
  };
};
