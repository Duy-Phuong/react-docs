





```shell npm install webpack
npm install live-server babel-cli
npm install babel-core babel-loader
npm install --save webpack-dev-server


npm install react-modal
npm install --save-dev css-loader style-loader sass-loader node-sass
npm install --save normalize.css

# === copy nếu có lỗi ===
xóa package.json, modules
uninstall sass-loader và node-sass, css-loader, style-loader
npm install sass-loader node-sass webpack webpack-dev-server css-loader style-loader --save-dev

# Lỗi: Module build failed: TypeError: this.getResolve is not a function của scss
npm install --save-dev webpack
npm install webpack-dev-server --save-dev

```

```js

const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
};

```