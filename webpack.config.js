module.exports = {
  entry: ["./src/main.js"],
  output: {
    filename: "script.js",
    path: __dirname + "./public",
  },
  devServer: {
    contentBase: __dirname + "/public",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
