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
- Phai co key khi loop

```js
import React from "react";

function ProductList() {
  var product = {
    id: 1,
    name: "TV",
    status: true
  };

  function showProduct(product) {
    return (
      <div key={product.id}>
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
      <div key={user.id}>
        <p>
          {index}. firstName: {user.firstName}
        </p>
        <p>lastName: {user.lastName}</p>
        <hr></hr>
      </div>
    );
  });

  return (
    <div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="thumbnail">
          <div className="caption">
            <div>{showProduct(product)}</div>
            <div>{elements}</div>
          </div>
        </div>

        <button type="button" className="btn btn-success">
          Buy
        </button>
      </div>
    </div>
  );
}

export default ProductList;
```

## Props

SD this.props.key trong class Component to display info
Noi dung ben trong the access by: this.props.children

```js
// App.js
<Robot name="NEXUS3" title="MR003">
  333
</Robot>;

// Robot.js
import React, { Component } from "react";

class Robot extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="thumbnail">
            <div className="caption">
              <h3>{this.props.title}</h3>
              <p>{this.props.name}</p>
              <p>
                <a className="btn btn-primary">{this.props.children}</a>
                <a className="btn btn-default">Action</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Robot;
```

## Handling event

Robot
**Cach 1**: Bat su kien k truyen tham so
Phai co constructor(props) va bind

```js
// Must add
 constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
```

- Neu ham k co tham so thi chi goi this.handleClick ma k can constructor

- Goi thong qua arrow func co tham so

```js
<a onclick={() => {this.onHandleClick('abc')}}>

```

**Cach 2**: su dung cu phap
`ten func = () => {}` roi goi binh thuong `this.onHandleClick` va k can constructor

## Ref

Lay value input tag by REF
file ProductList

```js
import React, { Component } from "react";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
  }
  onSave() {
    console.log(this.refs);
    alert(this.refs.name.value);
  }

  // cach 2
  onSave2 = () => {
    console.log(this.refs);
    alert(this.refs.name.value);
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-success">
              <div className="panel-heading">
                <h3 className="panel-title">Panel title</h3>
              </div>
              <div className="panel-body">
                <div className="form-group">
                  <label>Product name:</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    ref="name"
                  />
                  <br></br>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={this.onSave}
                  >
                    SAVE
                  </button>
                  &nbsp;&nbsp;&nbsp;
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={this.onSave2}
                  >
                    SAVE ARROW FUNC
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
```

## State

https://github.com/nghiepuit/lesson07-state
la trang thai cua component, khai bao nhung gia tri can luu tru cua Component do
Tao o constructor, Prop khong the thay doi value nhung state thi co, state is private in Component
Prop nhan gia tri tu ben ngoai

use setState():

```js
constructor(props) {
    super(props);
    // create state here
    this.state = {
      posts: [],
      comments: []
    };
  }

// Correct
this.setState({ comment: "Hello" });

// Correct
this.setState((state, props) => ({
  // not use this
  counter: state.counter + props.increment
}));
```
