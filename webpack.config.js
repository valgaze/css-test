const path = require("path");

module.exports = {
  entry: "./styles.scss",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "easy.css",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
