



https://www.udemy.com/course/webpack-from-beginner-to-advanced/

![image-20200418213853538](./webpack4.assets/image-20200418213853538.png)

C:\Users\phuong\AppData\Local\Programs\Python\Python37\python.exe D:/Source/Source_All/python/Test/readfile.py
======== name dir ========
## 1. Introduction
### 1. Introduction
### 2. What you need for this course
## 2. Initial Setup and Integrating Webpack
### 1. Why Do We Need Webpack

Có nhiều file js 

### 2. Setting Up Our Application

create file index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="src/hello-world.js"></script>
    <script src="src/index.js"></script>
    <title>Document</title>
  </head>
  <body></body>
</html>

```

src/index.js

```js
hello();
```

src/hello-world.js

```js
function hello() {
    console.log("hello");
}
```



### 3. Install Webpack And Integrate It With NPM

```shell
npm init -y

npm install --save-dev webpack webpack-cli
```

**project**

```diff
  webpack-demo
  |- package.json
+ |- webpack.config.js
  |- /dist
    |- index.html
  |- /src
    |- index.js
```

**webpack.config.js**

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

package.json

```js
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
```

### 4. Small Note about Github Repository.html

Hi guys and girls,

I hope you are enjoying the course so far!

I just want to let you know that there is a [Github Repository](https://github.com/vp-online-courses/webpack-tutorial) containing all the code for this course. If you have any issues with the code, it will help you to resolve those issues and continue with the course.

I am explaining how you can use the Github Repository in **Section 12**.

If you have any questions regarding the course, please feel free to write me via Q&A section and I will do my best to help you!

https://github.com/vp-online-courses/webpack-tutorial

### 4.1 Github Repository.html

https://github.com/vp-online-courses/webpack-tutorial

**NOTE**: lỗi error Uncaught SyntaxError: Invalid or unexpected token when run webpack

I fixed the problem by adding the meta tag `` to my index.html and rebuilding.

### 5. Integrating Webpack Into Our JS Application

hello-world.js

```js
function hello() {
  console.log("hello");
}

export default hello;

```

index.js

```js
import hello from "./hello-world";

hello();

```

index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
        <script src="./dist/bundle.js"></script>
    </body>
</html>


```

`npm run build`

NOTE: lưu ý đến thứ tự đặt thẻ script

## 3. Loaders
### 1. What Is Webpack Loader
### 2. Handling Images With Webpack

add-images.js

```js
import Kiwi from "./kiwi.jpg";

function addImage() {
  const img = document.createElement("img");
  img.src = Kiwi;
  img.alt = "Kiwi";
  img.width = 300;

  const bodyDomElement = document.querySelector("body");
  bodyDomElement.appendChild(img);
}

export default addImage;

```

add in index.js

webpack-config.js

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },
    ],
  },
};

```

npm install --save-dev file-loader

npm run build

### 3. Handling Images With Webpack. How To Use publicPath

Nếu để file index.html ngoài thư mục dist thì sẽ bị lỗi nên chỉ ra publicPath

![image-20200419094639812](./webpack4.assets/image-20200419094639812.png)  

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist/", // add sau này thay bằng https://..
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};

```



### 4. Handling CSS With Webpack

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist/",
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
        // add
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};

```

npm install --save-dev sass-loader node-sass style-loader css-loader

*hello-world-button.js*

```js
// import './hello-world-button.scss';
import "./hello-world.css";

class HelloWorldButton {
  //   buttonCssClass = "hello-world-button";

  render() {
    const button = document.createElement("button");
    const br = document.createElement("br");

    const body = document.querySelector("body");
    button.innerHTML = "Hello world";
    button.onclick = function () {
      const p = document.createElement("p");
      p.innerHTML = "Hello world";
      p.classList.add("hello-world-text");
      body.appendChild(p);
    };
    button.classList.add("hello-world-button");
    body.appendChild(br);

    body.appendChild(button);
  }
}

export default HelloWorldButton;

```

hello-world.css

```css
.hello-world-button {
  font-size: 20px;
  padding: 7px 15px;
  background: green;
  color: white;
  outline: none;
}

.hello-world-text {
  color: red;
  font-weight: bold;
}

```

![image-20200419100716059](./webpack4.assets/image-20200419100716059.png)

### 5. Handling SASS

Bỏ comment để test

hello-world-button.scss

````scss
$font-size: 20px;
$button-background-color: green;
$button-font-color: white;
$text-font-color: red;

.hello-world-button {
    font-size: $font-size;
    padding: 7px 15px;
    background: $button-background-color;
    color: $button-font-color;
    outline: none;
}

.hello-world-text {
    color: $text-font-color;
    font-weight: bold;
}

````



### 6. Using Latest JavaScript Features With Babel 7

hello-world-button.js

```js

class HelloWorldButton {
    // add props
    buttonCssClass = 'hello-world-button';

```

webpack.config.js

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist/",
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
        // add
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["transform-class-properties"],
          },
        },
      },
    ],
  },
};

```

`npm install @babel/core babel-loader @babel/preset-env babel-plugin-transform-class-properties --save-dev`



## 4. Plugins
### 1. What Is Webpack Plugin

![image-20200419102310344](./webpack4.assets/image-20200419102310344.png)

### 2. Minification Of The Resulting Webpack Bundle

https://webpack.js.org/plugins/terser-webpack-plugin/

```shell
$ npm install terser-webpack-plugin --save-dev
```

Làm nhỏ đi file bundle



### 3. Extracting CSS Into a Separate Bundle With mini-css-extract-plugin, Part 1

https://webpack.js.org/plugins/mini-css-extract-plugin/

To begin, you'll need to install `mini-css-extract-plugin`:

```bash
npm install --save-dev mini-css-extract-plugin
```

```js
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist/",
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.css$/,
          // add
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["transform-class-properties"],
          },
        },
      },
    ],
  },
    // add
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "styles.css",
    }),
  ],
};


```

index.html add link tag

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./dist/styles.css" />
    <title>Document</title>
  </head>
  <body>
    <script src="./dist/bundle.js"></script>
  </body>
</html>

```





### 4. Extracting CSS Into a Separate Bundle, Part 2







### 5. Browser Caching





### 6. How To Clean Dist Folder Before Generating New Bundles





### 7. Generating HTML Files Automatically During Webpack Build Process





### 8. Customizing Generated HTML Files
### 9. Integration with Handlebars

### 10. More Webpack Plugins

### 

## 5. Production vs Development Builds
### 1. Introduction
### 2. Mode
### 3. Managing Webpack Config for Production and Development Use Cases
### 4. Faster Development with webpack dev server
### 5. Cleaning Up A Bit
## 6. Multiple Page Applications
### 1. Introduction
### 2. Creating KiwiImage Component
### 3. Code Splitting in Webpack Multiple JS and CSS Bundles
### 4. How To Generate Multiple HTML Files
### 5. Extracting Common Dependencies While Code Splitting
### 6. Setting Custom Options for Code Splitting
### 7. How To Setup Development Environment For Multiple Page Application
## 7. Webpack Integration With Node And Express
### 1. Introduction
### 2. Getting Code for Single Page Application.html
### 3. Integrating Express Into Our Application
### 4. Serving HTML Pages via Express
### 5. Handling JS and CSS via Express
### 6. Getting Code for Multiple Page Application.html
### 7. Integrating Express.js Into A Multiple Page Application
## 8. Integration with jQuery
### 1. Getting the Source Code.html
### 2. Integration with jQuery
## 9. Using Custom Fonts with Webpack
### 1. Using Custom Fonts with Webpack



### 

## 10. Integration with Bootstrap

### 1. Using Bootstrap with Webpack

### 2. 2nd Method Of Importing CSS From Bootstrap

## 11. Using FontAwesome with Webpack

### 1. Using FontAwesome with Webpack

## 12. Github Repository

### 1. How To Use Github Repository

### 1.1 Link to the Github repository.html

## 13. Using ESLint

### 1. Configuring ESLint

## 14. Summary

### 1. Summary

### 2. Bonus Lecture.html