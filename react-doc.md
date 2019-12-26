LINK
https://www.youtube.com/watch?v=gL5HBA_1bDQ&list=PLJ5qtRQovuEOoKffoCBzTfvzMTTORnoyp
https://github.com/nghiepuit

LINK TẢI: http://nhasachtinhoc.blogspot.com/2019/12/chia-se-khoa-hoc-react-front-to-back-2019.html

## Install

Install extendsion: React developer tool
Giup XD trang web nao SD react  
Vao cong cu khac/ Tien ich

Install:

- JSX/ Babel

## Git ignore

https://www.gitignore.io/

## Create first app

```ts
npm install -g create-react-app
create-react-app my-app
cd my-app
npm start
```

Doi port tai file package.json
Default la 3000

```json
 "scripts": {
     // Add
    "start": "set port=4200 && react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

## Cau truc thu muc

## Component

### Su dung resource template

Bootstrap 3.3.7
![](../root/img/2019-12-25-23-51-09.png)

downloadva copy 3 folder css, font, js dua vao public

![](../root/img/2019-12-25-23-53-09.png)

https://getbootstrap.com/docs/3.3/getting-started/#download

Khai bao va use in index.html

```html
<!-- Bootstrap -->
<link href="%PUBLIC_URL%/css/bootstrap.min.css" rel="stylesheet" />

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="%PUBLIC_URL%/js/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="%PUBLIC_URL%/js/bootstrap.min.js"></script>
```

Download jquery: Click **Download the compressed, production jQuery 3.4.1**
Luu y: %PUBLIC_URL%

Sau do tao component Header, Product trong folder Component/
Thay tat ca ten `class` trong tag thanh `className` de khoi loi

Phai dat tat ca source JSX trong tag wraper in render() : co the div cha bao boc tat ca

## JSX

https://reactjs.org/docs/introducing-jsx.html
JSX Represents Objects
Babel compiles JSX down to React.createElement() calls

```js
// O ham render() tranh viet long nhau => use JSX
return React.createElement("h1", { className: "greeting" }, "Hello, world!");
```

Search gg: html to JSX

### CONVERT HTML TO JSX:

Copy ND html vao:
https://magic.reactjs.net/htmltojsx.htm

Note:

- Bo href de tranh bao loi
- Co tag cha: `<div></div>`
- use: "{}"
- class => className
- Toan tu 3 ngoi

```js
import React from "react";

function Product() {
  // start add
  var product = {
    id: 1,
    name: "TV",
    status: true
  };

  function showProduct(product) {
    return (
      <div>
        <h5>Name : {product.name}</h5>
        <p>Status: {product.status ? "avaiable" : "out of stock"}</p>
      </div>
    );
  }

  const users = [
    {
      id: 1,
      firstName: "Harper",
      lastName: "Perez"
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Perez2"
    }
  ];

  var elements = users.map((user, index) => {
    return (
      <div key="user.id">
        <p>
          {index}. firstName: {user.firstName}
        </p>
        <p>lastName: {user.lastName}</p>
        <hr></hr>
      </div>
    );
  });
  // end add
  return (
    <div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="thumbnail">
          <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone8-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795416637"
            alt="image"
          />
          <div className="caption">
            <h3>IPhone</h3>
            <p>15.000.000</p>
            <p>{showProduct(product)}</p>
            <p>{elements}</p>
          </div>
        </div>

        <button type="button" className="btn btn-success">
          Buy
        </button>
      </div>
    </div>
  );
}

export default Product;
```
