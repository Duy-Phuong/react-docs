





```shell npm install webpack
npm install live-server babel-cli

6.7
npm install react react-dom validator

6.8
npm install babel-core babel-loader

6.11
npm install --save webpack-dev-server


6.12
npm install babel-plugin-transform-class-properties

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

9. Router
```shell
npm install react-router-dom

```

10.4 Redux

```shell
npm run dev-server
npm install --save redux
```

10.12
"plugins": [
    "transform-class-properties",
    "transform-object-rest-spread" // add
  ]
  
npm install --save-dev babel-plugin-transform-object-rest-spread

npm install --save react-redux

