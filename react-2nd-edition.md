[TOC]

C:\Users\phuong\AppData\Local\Programs\Python\Python37\python.exe D:/Source/Source_All/python/Test/readfile.py
======== name dir ========

## 1. Welcome
### 1. Welcome & Asking Good Questions
### 2. Why should I learn React
## 2. Setting up Your Environment
### 1. Section Intro Setting up Your Environment
### 2. Installing Visual Studio Code
### 3. Installing Node.js & Yarn

`npm install -g yarn`

`yarn --version` => phải restart

```shell
phuong@MSI MINGW64 /d/Source/react
$ npm install -g yarn
+ yarn@1.22.4
added 1 package in 2.401s

phuong@MSI MINGW64 /d/Source/react
$ yarn -v
1.22.4

phuong@MSI MINGW64 /d/Source/react
$ yarn --version
1.22.4

```



## 3. Hello React
### 1. Section Intro Hello React

http://indecision.mead.io/
https://github.com/andrewjmead/react-course-2-indecision-app



https://viblo.asia/p/so-sanh-yarn-va-npm-1VgZvww7lAw

### 2. Setting up a Web Server
Create folder hold project

Create public folder, file index.html nằm trong folder public

index.html

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Indecision App</title>
</head>

<body>
  <div id="app"></div>
    // thay đổi version cho phù hơn v 16
  <script src="https://unpkg.com/react@15/dist/react.js"></script>
  <script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
  <script src="/scripts/app.js"></script>
</body>

</html>

```

Vào project install live-server globally

```shell
yarn global add live-server
live-server -v
# Nếu không xem được version ở trên thì đây là cách 2
npm install -g live-server
live-server -v

# nằm trong folder in project
live-server public
```

So the goal is to install a tool that we're going to be able to access from the command line.
So we're going to use yarn global ad followed by the module name.

We can go ahead and run this command and that will give us access to a new command right from the command line.

```shell
phuong@MSI MINGW64 /d/Source/react/morden-react/indecision-app
$ live-server public
Serving "public" at http://127.0.0.1:8080

```



### 3. Hello React

![image-20200327232216398](./react-2nd-edition.assets/image-20200327232216398.png)  



![image-20200327232152199](./react-2nd-edition.assets/image-20200327232152199.png) 

Type: React in console  

![image-20200327232313302](./react-2nd-edition.assets/image-20200327232313302.png)  

scrips/app.js

```js
console.log('App.js is running!');

// JSX - JavaScript XML
// var template = <p>This is JSX from app.js!</p>;
var template = React.createElement(
  "h1",
  { id: "someid" }, // attribute
  "Something new"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

```

Vào babel convert html

![image-20200327232512218](./react-2nd-edition.assets/image-20200327232512218.png)

### 4. Setting up Babel

https://babeljs.io/docs/en/plugins

![image-20200403212657976](./react-2nd-edition.assets/image-20200403212657976.png)

```shell
yarn global add babel-cli@6.24.1
# cach 2
npm install -g babel-cli@6.24.1
babel --help
yarn init
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
# sinh ra file yarn.lock
```

Create src/app.js

```js
console.log('App.js is running!');

// JSX - JavaScript XML
var template = <h1>Indecision App</h1>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

```

Run `babel src/app.js --out-file=public/srcipts/app.js --presets=env,react `

Run `babel src/app.js --out-file=public/srcipts/app.js --presets=env,react  --watch` rồi sửa file app.js trong scripts

`live-server public`

### 5. Exploring JSX
### 6. JSX Expressions

app.js

```js
console.log('App.js is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Andrew',
  age: 26,
  location: 'Philadelphia'
};
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

```



### 7. Conditional Rendering in JSX
### 8. ES6 Aside const and let

playground.js

```js
var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Jen Mead';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);

```





### 9. ES6 Aside Arrow Functions

```js
// function square(x) {
//   return x * x;
// };

// console.log(square(3));

// // const squareArrow = (x) => {
// //   return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));


// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0];
// };

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Andrew Mead'));

```



### 10. ES6 Aside Arrow Functions Part II

```js
// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());

```



### 11. Events and Attributes

app.js

```js

let count = 0;
const addOne = () => {
  console.log('addOne');
};
const minusOne = () => {
  console.log('minusOne');
};
const reset = () => {
  console.log('reset');
};
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
```



### 12. Manual Data Binding

```js
// add count
let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
```



### 13. Forms and Inputs

![image-20200328005643127](./react-2nd-edition.assets/image-20200328005643127.png)  

app.js

```js
console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();

```



### 14. Arrays in JSX

```js
<ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
```



### 15. Picking an Option

```js

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};


      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>

```



### 16. Build It Visibility Toggle

```js
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>

```



## 4. React Components
### 1. Section Intro React Components
### ![image-20200328082500513](./react-2nd-edition.assets/image-20200328082500513.png)
### 2. Thinking in React

### 3. ES6 Classes Part I

es6-classes-1.js

```js
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}


const me = new Person('Andrew Mead', 26);
console.log(me.getDescription());

const other = new Person(undefined, undefined);
console.log(other.getDescription());
// Andrew Mead is 26 ...
// Anonymous is 0 year(s) old.

// 4
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}



// 4
class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const me = new Traveler('Andrew Mead', 26, 'Philadelphia');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());


```



### 4. ES6 Classes Part II
### 5. Creating a React Component

app.js

```js
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Options component here
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        AddOption component here
      </div>
    );
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));

```



### 6. Nesting Components

app.js

```js
class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Options component here
        // add
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        Option component here
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

```



### 7. Component Props

app.js

```js
class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing one', 'Thing two', 'Thing four'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        AddOption component here
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

```



### 8. Events & Methods

app.js
```js

class Action extends React.Component {
    // add
  handlePick() {
    alert('handlePick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
    // add
  handleRemoveAll() {
    alert('handleRemoveAll');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
    // add
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

```

### 9. Method Binding

app.js

```js

class Options extends React.Component {
    // add
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
      // add thêm nếu chưa có bind ở trên mà access => err cannot access props
    console.log(this.props.options);
    // alert('handleRemoveAll');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}s
```

Tương tự:

![image-20200403223309394](./react-2nd-edition.assets/image-20200403223309394.png)

### 10. What Is Component State

component state to manage some data, khi data change => auto render

![image-20200329222825785](./react-2nd-edition.assets/image-20200329222825785.png)

### 11. Adding State to Counter App Part I

counter-example.js

```js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleAddOne() {
    console.log('handleAddOne');
  }
  handleMinusOne() {
    console.log('handleMinusOne');
  }
  handleReset() {
    console.log('handleReset');
  }
  render() {
    return (
      <div>
        <h1>Count: </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
```



### 12. Adding State to Counter App Part II

counter-examples.js

```js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
      // add new state
    this.state = {
      count: 0
    };
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
```



### 13. Alternative setState Syntax





### 14. Build It Adding State to VisibilityToggle
build-it-visible.js

```js
class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

```

### 15. Indecision State Part I

app.js

```js
class IndecisionApp extends React.Component {
    // add
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing three']
    };
  }
    // add
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
    
    // add
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
      </div>
    );
  }
}
```



### 16. Indecision State Part II

app.js

```js
handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }



class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
      // add
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return { error };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
```



### 17. Summary Props vs. State

## 5. Stateless Functional Components
### 1. Section Intro Stateless Functional Components
### 2. The Stateless Functional Component

app.js

```js

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<User name="a" age={26} />, document.getElementById('app'));
```

app.js

```js
// add

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map((option) => <Option key={option} optionText={option} />)
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
    </div>
  );
};

```



### 3. Default Prop Values

app.js

```js

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      // add
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

// add nếu title không được truyền vào thì sẽ hiển thị default
Header.defaultProps = {
  title: 'Indecision'
};



class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
      // sửa
    this.state = {
      options: props.options /// []
    };
      
      
   // set default here
   // add

IndecisionApp.defaultProps = {
  options: []
};

```

counter-example.js

```js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
      // fix
    this.state = {
      count: props.count // 0
    };
  }
    
// add
Counter.defaultProps = {
  count: 0
};
```



### 4. React Dev Tools

Cài react developer tools, có thể search tên component bên trái hiển thị props and state

You can change value in state to test in REACT tab

![image-20200404072558420](./react-2nd-edition.assets/image-20200404072558420.png)  

Khi hover lên 1 component chọn có hiển thị `=== $r`

![image-20200404072850714](./react-2nd-edition.assets/image-20200404072850714.png)  

Sau đó vào console gõ $r để xem kết quả:

![image-20200404073015498](./react-2nd-edition.assets/image-20200404073015498.png)

### 5. Removing Individual Options

Viết ngắn gọn lại setState ở nhiều chỗ

app.js

```js
// add
  handleDeleteOptions() {
      // sửa lại setstate cho ngắn hơn bỏ return đi
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

...
<Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}



const Option = (props) => {
  return (
    <div>
      {props.optionText}
      // add new button
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};
```

Nếu để bình thường khi onClick sẽ print trên console event:

![image-20200404074240159](./react-2nd-edition.assets/image-20200404074240159.png)  

gg: mdn filter javascript



### 6. Lifecycle Methods

app.js

```js

  componentDidMount() {
    console.log('fetching data');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('saving data');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
```

Test componentWillUnmount gõ trên console

![image-20200404074909399](./react-2nd-edition.assets/image-20200404074909399.png)

### 7. Saving and Loading Options Data

Sử dụng localStorage, vào console test

![image-20200404075134164](./react-2nd-edition.assets/image-20200404075134164.png)  

![image-20200404075241416](./react-2nd-edition.assets/image-20200404075241416.png)  

app.js

```js
componentDidMount() {
    // add
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
        // add
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
```

![image-20200404075543269](./react-2nd-edition.assets/image-20200404075543269.png)

### 8. Saving and Loading the Count

Khi cộng chuỗi và số thì result is string => use parseInt to convert

Check isNaN => parseInt("abc", 10) = NaN

app.js remove default value

counter-example.js

```js
// add
  componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10);

    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }
```

![image-20200404081519197](./react-2nd-edition.assets/image-20200404081519197.png)

## 6. Webpack
### 1. Section Intro Webpack

The first advantage of Web pack is that it allows us to organize our Javascript.

So in the end of the day when we run our app through web pack we're going to get a single javascript file back and that file what's called the bundle is going to contain everything our application needs to run.

![image-20200404084048672](./react-2nd-edition.assets/image-20200404084048672.png)

### 2. What Is Webpack
### 3. Avoid Global Modules

Before we install web pack as a global module and run it from the terminal I want to talk about why it's generally a bad idea to install global modules whether you using yarn or NPM. (live-server and babel)

- Khi down về không biết tool nào và version
- `yarn global remove babel-cli live-server`
- `npm uninstall -g babel-cli live-server`

`yarn add live-server@1.2.0` 

package.json

```js
{
  "name": "indecision-app",
  "version": "1.0.0",
  "main": "index.js",
  "author": "Andrew Mead",
  "license": "MIT",
      // add
  "scripts": {
    "serve": "live-server public/",
    "build": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch"
  },
  "dependencies": {
    "babel-cli": "6.24.1",
    "babel-preset-env": "1.5.2",
    "babel-preset-react": "6.24.1",
    "live-server": "^1.2.0"
  }
}
```

`yarn run build`

### 4. Installing & Configuring Webpack

`yarn add webpack@3.1.0`

package.json

```js
{
  "name": "indecision-app",
  "version": "1.0.0",
  "main": "index.js",
  "author": "Andrew Mead",
  "license": "MIT",
  "scripts": {
    "serve": "live-server public/",
        
     // add
    "build": "webpack --watch",
    "build-babel": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch"
  },
  "dependencies": {
    "babel-cli": "6.24.1",
    "babel-preset-env": "1.5.2",
    "babel-preset-react": "6.24.1",
    "live-server": "^1.2.0",
    "webpack": "3.1.0" // add
  }
}

```

webpack.config.js

```js
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
};

```

https://webpack.js.org/configuration/entry-context/#entry

Test: `node webpack.config.js`  khi thêm console.log(__dirname);

`npm run build`

### 5. ES6 importexport

src/utils.js

```js
console.log('utils.js is running');

export const square = (x) => x * x;

export const add = (a, b) => a + b;

// export { square, add };

// exports - default export - named exports

```

app.js

```js
// import './utils.js';
// import { square, add } from './utils.js';

// console.log('app.js is running');
// console.log(square(4));
// console.log(add(100, 23));

import { isAdult, canDrink } from './person.js';
console.log(isAdult(18));
console.log(canDrink(20));

```

person.js

```js
const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 21;

export { isAdult, canDrink };

```



### 6. Default Exports

utils.js

```js
console.log('utils.js is running');

export const square = (x) => x * x;

export const add = (a, b) => a + b;

export default (a, b) => a - b;

// export { square, add, subtract as default };

// exports - default export - named exports

```

person.js

```js
const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 21;
const isSeniorCitizen = (age) => age >= 65;

export { isAdult, canDrink, isSeniorCitizen as default };

```

app.js

```js
// import subtract, { square, add } from './utils.js';

import isSenior, { isAdult, canDrink } from './person.js';
console.log(isAdult(18));
console.log(canDrink(20));
console.log(isSenior(65));
```

Khi export default có thể import với bất kì tên nào và call it

### 7. Importing npm Modules

app.js

```js
// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'testing 123');
ReactDOM.render(template, document.getElementById('app'));

```



### 8. Setting up Babel with Webpack

.babelrc

```js
{
  "presets": [
    "env",
    "react"
  ]
}

```

webpack.config.js

```js
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
};

// install babel-core babel-loader
/*
	"babel-cli": "6.24.1",
    "babel-core": "6.25.0",
    "babel-loader": "7.1.1",
    "babel-preset-env": "1.5.2",
    "babel-preset-react": "6.24.1",
*/

```

https://webpack.js.org/configuration/module/#modulerules

### 9. One Component per File

Tách ra thành nhiều file chứa các component khác nhau

Action.js

```js
import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
};

export default Action;

```



### 10. Source Maps with Webpack

```js
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  // add
  devtool: 'cheap-module-eval-source-map'
};

```

https://webpack.js.org/configuration/devtool/#devtool

Sửa AddOption cho sai

![image-20200404102922120](./react-2nd-edition.assets/image-20200404102922120.png)  

Nếu không có webpack devtool khó track err

![image-20200404103046334](./react-2nd-edition.assets/image-20200404103046334.png)

### 11. Webpack Dev Server

https://webpack.js.org/configuration/dev-server/#devserver

Install: `npm install --save webpack-dev-server`

```js
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  devtool: 'cheap-module-eval-source-map',
    // add
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};

```

package.json

```json

  "scripts": {
    "serve": "live-server public/",
    "build": "webpack",
      // add
    "dev-server": "webpack-dev-server"
  },
```

**yarn run dev-server**

### 12. ES6 class properties

https://babeljs.io/docs/en/babel-preset-stage-2

.babelrc

```js
{
  "presets": [
    "env",
    "react"
  ],
      // add
  "plugins": [
    "transform-class-properties"
  ]
}

```

**yarn run dev-server**

new syntax không cần constructor, use arrow function mà không cần bind

![image-20200404104940047](./react-2nd-edition.assets/image-20200404104940047.png)  

Sửa lại file IndecisionApp 

## 7. Using a Third-Party Component
### 1. Section Intro Using a Third-Party Component
### 2. Passing Children to Component

app.js use this.props.children

### 3. Setting up React-Modal

gg: react-modal

https://github.com/reactjs/react-modal

```shell
$ npm install react-modal
```

OptionModal.js

```js
import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption} // convert string to boolean
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;

```

https://github.com/reactjs/react-modal#examples

IndecisionApp.js

```js

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined // add
  };

 handleClearSelectedOption = () => {
     // add
    this.setState(() => ({ selectedOption: undefined }));
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
      // add
    this.setState(() => ({
      selectedOption: option
    }));
  };

        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
```

<img src="./react-2nd-edition.assets/image-20200404113715613.png" alt="image-20200404113715613" style="zoom:100%;" />

### 4. Bonus Refactoring Other Stateless Functional Components

## 8. Styling React
### 1. Section Intro Styling React
### 2. Setting up Webpack with SCSS

styles.scss

```scss
$brand-color: blue;
* {
    color: $brand-color;
}

```



webpack-config.js

```js
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};

```

npm install --save-dev css-loader style-loader sass-loader

app.js

```js
import './styles/styles.scss';

```



### 3. Architecture and Header Styles

styles/base/_base.scss

```scss
html {
  font-size: 62.5%; // 62,5*16 = 10
}

body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.6rem;
}

```

components/_header.scss

```css
.header {
  background: #20222b;
  color: white;
  margin-bottom: 4.8rem;
  padding: 1.6rem 0;
}

.header__title {
  font-size: 3.2rem;
  margin: 0;
}

.header__subtitle {
  color: #a5afd7;
  font-size: 1.6rem;
  font-weight: 500;
  margin: 0;
}

```

styles.scss

```scss
@import './base/base';
@import './components/header';

```



### 4. Reset That $#!

gg: nomalize css

https://github.com/necolas/normalize.css/

```shell
npm install --save normalize.css
```

webpack.config.js

```js
 module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
        // add ?
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
```

Cũng giống như cái title **CSS Reset**, hiển nhiên nó là một số thuộc tính CSS dùng để “cài đặt” lại tất cả các CSS của trình duyệt về mặc định.

Việc này là tối quan trọng nếu các anh em không muốn viết nhiều phiên bản CSS trên project của mình riêng cho mỗi trình duyệt.

Thực chất nếu các anh em chỉ thường sử dụng các `CSS Framework` như Bootstrap, thì cũng chả cần quan tâm vấn đề này vì hầu như chúng luôn được include trong tất cả `Front End Framework` như trên.

https://hungphamdevweb.com/front-end-reset-css-voi-normalize-css.html

Cơ bản `Normalize` là một chuỗi các thuộc tính chuyên dùng chỉ để Reset CSS.

Dưới đây là một đoạn code nhỏ trong `Normalize`

```css
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the `main` element consistently in IE.
 */

main {
  display: block;
}
```

Ở đây người ta cũng đã chú thích rất kỹ, các anh em chỉ cần đọc sơ qua thôi cũng sẽ hiểu.

## Nguyên Tắc Sử Dụng CSS Reset

Dưới đây là một vài nguyên tắc hoạt động **CSS Reset**, các anh em nên biết sơ qua trước khi bắt đầu code giao diện:

### Rule 1: CSS Reset luôn ở đầu tiên trong các file CSS

Điều này thì các anh em đã rõ như ban ngày rồi. Nếu nó là một file riêng hãy import nó ở trên cùng, còn nếu copy thì cũng nên nhớ paste nó ở trên cùng file CSS của mình.

### Rule 2: CSS Reset luôn xử lý các element HTML

Nhiệm vụ của **CSS Reset** là làm việc trực tiếp với các element chứ không phải các class hay ID nào cả. Bởi nó sẽ làm việc với trình duyệt, mà các trình duyệt cũng làm cách tương tự để thêm các CSS mặc định vào.

### Rule 3: Custom CSS Style phải gọi vào các Class/ID hoặc có parent element

Điều này rất rõ ràng và cần thiết trong **Code Standards**:
Bạn nên code vào `.button` thay vì `a.button`
Bạn nên code vào `.list li` thay vì `ul li` hay `ul.list li`
Việc tránh gọi các element trình duyệt mà sử dụng Class/ID đóng vai trò quan trọng giúp bạn dễ dàng xử lý xung đột giữa **CSS Reset** và Custom Style.



app.js

```js

import 'normalize.css/normalize.css';
import './styles/styles.scss';
```

`npm run dev-server`



### 5. Theming with Variables

base/settings.scss

```css
// Colors
$off-black: #20222b;
$dark-blue: #333745;
$off-white: #a5afd7;
// Spacing
$m-size: 1.6rem;
$l-size: 3.2rem;
$xl-size: 4.8rem;

```

styles.scss

```css
@import './base/settings';
@import './base/base';
@import './components/container';
@import './components/header';

```

_base.scss

```css
html {
  font-size: 62.5%;
}

body {
  background: $dark-blue;
  font-family: Helvetica, Arial, sans-serif;
  font-size: $m-size;
}

```

add _container.scss

```css
.container {
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 $m-size;
}
// được gọi trong class header, IndecisionApp
```



### 6. Big Button & Options List

_button.scss

```scss
// Big Button
// Gọi trong Action
// darken in scss
.big-button {
  background: $purple;
  border: none;
  border-bottom: .6rem solid darken($purple, 10%);
  color: white;
  font-weight: bold;
  font-size: $l-size;
  margin-bottom: $xl-size;
  padding: 2.4rem;
  width: 100%;
}

.big-button:disabled {
  opacity: .5;
}

// Button
// Add Option
.button {
  background: $purple;
  border: none;
  border-bottom: .3rem solid darken($purple, 10%);
  color: white;
  font-weight: 500;
  padding: $s-size;
}

// Options, Option
.button--link {
  background: none;
  border: none;
  color: $off-white;
  padding: 0;
}

```

base.scss

```scss

button {
  cursor: pointer;
}

button:disabled {
  cursor: default;
}

```



### 7. Styling the Options List

style.scss

```scss
@import './base/settings';
@import './base/base';
@import './components/button';
@import './components/container';
// add
@import './components/header';
@import './components/widget';

```

_widget.scss

```scss
// Widget
// Options
.widget {
  background: $light-blue;
  margin-bottom: $xl-size;
}

.widget__message {
  border-bottom: 1px solid lighten($light-blue, 10%);
  color: $off-white;
  margin: 0;
  padding: $l-size;
  text-align: center;
}

// Widget Header
.widget-header {
  background: $blue;
  color: $off-white;
  display: flex;
  justify-content: space-between;
  padding: $m-size;
}

.widget-header__title {
  margin: 0;
}

```

![image-20200404155401715](./react-2nd-edition.assets/image-20200404155401715.png)

### 8. Styling Option Item

option.scss

```scss
.option {
  border-bottom: 1px solid lighten($light-blue, 10%);
  display: flex;
  justify-content: space-between;
  padding: $l-size $m-size;
}

.option__text {
  color: white;
  font-weight: 500;
  font-size: 2rem;
  margin: 0;
}

```

_add-option.scss

```scss
// Add Option Error
.add-option-error {
  color: $off-white;
  font-style: italic;
  margin: $m-size 0 0 0;
  padding: 0 $m-size;
}

// Add Option
.add-option {
  display: flex;
  padding: $m-size;
}

.add-option__input {
  background: $dark-blue;
  border: none;
  color: $off-white;
  border-bottom: .3rem solid darken($dark-blue, 10%);
  flex-grow: 1;
  margin-right: $s-size;
  padding: $s-size;
}

```

![image-20200404155910349](./react-2nd-edition.assets/image-20200404155910349.png)

### 9. Styling React-Modal

_modal.scss

```scss
.ReactModalPortal>div {
  opacity: 0;
}

.ReactModalPortal .ReactModal__Overlay {
  align-items: center;
  display: flex;
  justify-content: center;
  transition: opacity 200ms ease-in-out;
}

.ReactModalPortal .ReactModal__Overlay--after-open {
  opacity: 1;
}

.ReactModalPortal .ReactModal__Overlay--before-close {
  opacity: 0;
}

.modal {
  background: $light-blue;
  color: white;
  max-width: 30rem;
  outline: none;
  padding: $l-size;
  text-align: center;
}

.modal__title {
  margin: 0 0 $m-size 0;
}

.modal__body {
  font-size: 2rem;
  font-weight: 300;
  margin: 0 0 $l-size 0;
  word-break: break-all;
}

```

OptionModal.js

```js
import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"

// add
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;
```



### 10. Mobile Considerations

public/index.html

```html

<head>
  <meta charset="UTF-8">
  //  add
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Indecision App</title>
</head>
```

add-option.scss

```scss

@media (min-width: $desktop-breakpoint) {
  .add-option {
    flex-direction: row;
  }
  .add-option__input {
    margin: 0 $s-size 0 0;
  }
}

```

header.scss

```scss
@media (min-width: $desktop-breakpoint) {
  .header {
    margin-bottom: $xl-size;
  }
}

```

Xem lại

### 11. Bonus Favicon

index.html

```html
<title>Indecision App</title>
  <link rel="icon" type="image/png" href="/images/favicon.png" />

```



## 9. React-Router
### 1. Section Intro React Router
### 2. Server vs. Client Routing

![image-20200404164111277](./react-2nd-edition.assets/image-20200404164111277.png)

### 3. Setting Up Budget App

copy từ project cũ qua

package.json

```js
  "name": "expensify",
```

_setting.scss

```css
// Colors
// Spacing
$s-size: 1.2rem;
$m-size: 1.6rem;
$l-size: 3.2rem;
$xl-size: 4.8rem;
$desktop-breakpoint: 45rem;

```

app.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<p>This is my boilerplate</p>, document.getElementById('app'));

```



### 4. React-Router 101

https://reacttraining.com/react-router/web/guides/quick-start

`npm install react-router-dom`

app.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from my add expense component
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from my edit expense component
  </div>
);

const HelpPage = () => (
  <div>
    This is from my help component
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

```

webpack-config.js => xử lý routing via client side, sẽ không call server side khi gọi /create

```js

  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true // add
  }
};

```

exact={true}

### 5. Setting up a 404

app.js

```js

const NotFoundPage = () => (
  <div>
    404!
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);
```

Khi vào /create thì thấy cả 404 => use Switch nếu match thì stop

### 6. Linking Between Routes

app.js

```js
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

```

thêm exact nếu không vào /help dashboard cũng sẽ bị active

base.scss

```scss

.is-active {
  font-weight: bold;
}

```



### 7. Organizing Our Routes

routers/AppRouter.js

```js
import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

```



### 8. Query Strings and URL Parameters

AppRouter.js

```js
        <Route path="/edit/:id" component={EditExpensePage} />

```

EditExpensePage

```js
import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      Editing the expense with id of {props.match.params.id}
    </div>
  );
};

export default EditExpensePage;

```



### 9. Build It Router for Portfolio Site

AppRouter.js

```js

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/portfolio" component={PortfolioPage} exact={true} />
        <Route path="/portfolio/:id" component={PortfolioItemPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
```

Header.js

```js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink>
    <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
  </header>
);

export default Header;

```



## 10. Redux
### 1. Section Intro Redux
### 2. Why Do We Need Something Like Redux

![image-20200404222958547](./react-2nd-edition.assets/image-20200404222958547.png)  

![image-20200404223117346](./react-2nd-edition.assets/image-20200404223117346.png)  

![image-20200404223340540](./react-2nd-edition.assets/image-20200404223340540.png)

### 3. Setting up Redux

webpack.config.js

```js
module.exports = {
  entry: './src/playground/redux-101.js',
```

redux-101.js

```js
import { createStore } from 'redux';

const store = createStore((state = { count: 0 }) => {
  return state;
});

console.log(store.getState());

// Actions
// I'd like to increment the count
// I'd like to reset the count to zero

```

```shell
npm run dev-server
npm insatll --save redux
```



### 4. Dispatching Actions

redux-101.js

```js
import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});

console.log(store.getState());

// Actions - than an object that gets sent to the store

// I'd like to increment the count
store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT'
});

// I'd like to reset the count to zero


console.log(store.getState());

```



### 5. Subscribing and Dynamic Actions

redux-101.js

```js

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
          // add
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});

// add
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5 // add
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

store.dispatch({
  type: 'SET',
  count: 101
});

```



### 6. ES6 Object Destructuring

destructuring.js

```js
// const person = {
//   name: 'Andrew',
//   age: 27,
//   location: {
//     city: 'Philadelphia',
//     temp: 88
//   }
// };

// set default value
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// Sau khi gán temp: temprature thì chỉ có thể access temperature => rename

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    // name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); // Penguin, Self-Published

```

webpack.config.js

```js

module.exports = {
  entry: './src/playground/destructuring.js',

```



### 7. ES6 Array Destructuring

redux-101.js

```js

//
// Array destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);

```



### 8. Refactoring and Organizing

Sửa trong webpack

redux-101.js

```js
import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// reducer
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: -100 }));

```

Thay vì truyền vào data và gọi data.a thì

![image-20200405073803094](./react-2nd-edition.assets/image-20200405073803094.png)

### 9. Reducers

redux 101.js

```js

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or actiton

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);
```

Pure func là func xác định đầu ra dựa vào input và không thay đổi giá trị bên ngoài

redux-expensify.js

```js
import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};


```

webpack.config.js

```js

module.exports = {
  entry: './src/playground/redux-expensify.js',

```



### 10. Working with Multiple Reducers

redux-expensify.js

```js
import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Filters Reducer
// text => '', sortBy => 'date', startDate => undefined, endDate => undefined

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());

const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};


```



### 11. ES6 Spread Operator in Reducers

uuid npm

redux-expensify.js

```js
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // return state.concat(action.expense);
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

// add
store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

// console.log(expenseOne);
store.dispatch(removeExpense({ id: expenseOne.expense.id }));

const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};


```

![image-20200405080436133](./react-2nd-edition.assets/image-20200405080436133.png)  

![image-20200405080515302](./react-2nd-edition.assets/image-20200405080515302.png)

### 12. Spreading Objects

redux-expensify.js

```js

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    default:
      return state;
  }
};


store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());


```

gg: babel object spread

```js
use = {
    name: "asas",
    age: 21
};
console.log({
    ...user
});
// sẽ gây ra lỗi vì spead chỉ chạy trên main stream => tool
```

.babelrc

```js
{
  "presets": [
    "env",
    "react"
  ],
  "plugins": [
    "transform-class-properties",
    "transform-object-rest-spread" // add
  ]
}

```

```js
use = {
    name: "asas",
    age: 21
};
console.log({
    ...user,
    country: "VN",
    age: 37
});
// override and return new obj
```



https://babeljs.io/docs/en/babel-plugin-transform-object-rest-spread.html

```shell
npm install --save-dev babel-plugin-transform-object-rest-spread
```

### 13. Wrapping up Our Reducers

redux-expensify.js

```js


// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});



// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};


// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(125)); // startDate 125
store.dispatch(setStartDate()); // startDate undefined
store.dispatch(setEndDate(1250)); // endDate 1250
```



### 14. Filtering Redux Data

redux-expensify.js

```js
// add
// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  });
};

// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

// add
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

store.dispatch(setTextFilter('ffe'));

```

timestamp milliseconds từ 1st 1970, âm là trk đó

### 15. Sorting Redux Data

gg: mdn array sort 

```js
// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
      
  // add
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};


store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
```



## 11. React with Redux
### 1. Section Intro Connecting React and Redux
### 2. Organizing Redux

Create folder actions, reducer

action/expenses.js

```js
import uuid from 'uuid';

// ADD_EXPENSE
export const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

```

filter.js

```js
// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

```

reducer/expense.js

```js
// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    default:
      return state;
  }
};

```

filter.js

```js
// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

```

configureStore.js

```js
import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );

  return store;
};

```

selectors/expense.js

```js
// Get visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

```

app.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill' }));
store.dispatch(addExpense({ description: 'Gas bill' }));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('app'));

```



### 3. The Higher Order Component

hoc.js

```js
// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
          <p>Please login to view the info</p>
        )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'));

```



### 4. Connecting Store and Component with React-Redux

`npm install --save react-redux`

https://react-redux.js.org/api/provider

app.js

```js
import { Provider } from 'react-redux';

setTimeout(() => {
  store.dispatch(setTextFilter('rent'));
}, 3000)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
```

ExpenseList.js

```js
import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.filters.text}
    {props.expenses.length}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);

```

```json
// xem thôi
const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};


```



### 5. Rendering Individual Expenses

ExpenseListItem.js

```js
import React from 'react';

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default ExpenseListItem;

```

ExpenseList.js

```js
import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);

```



### 6. Controlled Inputs for Filters

ExpenseListFilters.js

```js
import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={(e) => {
      props.dispatch(setTextFilter(e.target.value));
    }} />
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);

```

![image-20200405133657727](./react-2nd-edition.assets/image-20200405133657727.png)  

ExpenseListItem.js

```js
<button onClick={() => {
      dispatch(removeExpense({ id }));
    }}>Remove</button>
  </div>

export default connect()(ExpenseListItem);

```



### 7. Dropdown for Picking SortBy

ExpenseListFilter.js

```js
<select
      value={props.filters.sortBy}
      onChange={(e) => {
        if (e.target.value === 'date') {
          props.dispatch(sortByDate());
        } else if (e.target.value === 'amount') {
          props.dispatch(sortByAmount());
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
```

app.js

```js

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

```



### 8. Creating Expense AddEdit Form

ExpenseForm.js

```js
import React from 'react';

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: ''
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

```

AddExpensePage.js

```js
import React from 'react';
import ExpenseForm from './ExpenseForm';

const AddExpensePage = () => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm />
  </div>
);

export default AddExpensePage;

```

![image-20200405142801100](./react-2nd-edition.assets/image-20200405142801100.png)  

Khi setState, access trực tiếp trong call back(có thể fix bằng thêm e.persist()):

![image-20200405144004784](./react-2nd-edition.assets/image-20200405144004784.png)  

regex:

https://regex101.com/

![image-20200405144519776](./react-2nd-edition.assets/image-20200405144519776.png)  

()? is a optional group

### 9. Setting up a Date Picker

DatePicker

https://momentjs.com/

gg: airbnb react dates

https://github.com/airbnb/react-dates

http://airbnb.io/react-dates/?path=/story/singledatepicker-sdp--default

```shell
npm install moment
npm install react-dates react-addons-shallow-compare
```

ExpenseForm.js

```js

import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


// const date = new Date();
const now = moment();
console.log(now.format('MMM Do, YYYY'));  // Jan 1st, 2019

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
      // add
    createdAt: moment(),
    calendarFocused: false
  };


  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

....

<SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1} // show only 1 month
            isOutsideRange={() => false} // can pick day in the past
          />
```

https://momentjs.com/docs/#/displaying/

### 

### 10. Wiring up Add Expense

ExpenseForm.js

```js

  onAmountChange = (e) => {
    const amount = e.target.value;
// fix add 1 number at least
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

onDateChange = (createdAt) => {
    // add
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

// add

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
```

![image-20200405154232258](./react-2nd-edition.assets/image-20200405154232258.png)  

AddExpensePage

```js
import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpensePage);

```



### 11. Wiring up Edit Expense

EditExpensePage 

```js
import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);

```

ExpenseForm.js

```js

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
```

ExpenseListItem.js

```js
import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default ExpenseListItem;

```



### 12. Redux Dev Tools

gg: redux developer tools extension

https://github.com/zalmoxisus/redux-devtools-extension

Copy đoạn vào store:

```js

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
      // add
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

```



### 13. Filtering by Dates

https://github.com/airbnb/react-dates

vào mục DateRangePicker

reducer/filter.js

```js
import moment from 'moment';

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
    // add
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};
```

ExpenseListFilters

```js
// convert to class component
class ExpenseListFilters extends React.Component {
    // add
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }


// add
<DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
```

showClearDates

![image-20200405161922366](./react-2nd-edition.assets/image-20200405161922366.png)  

https://momentjs.com/docs/#/query/

selectors/expenses.js

```js
// fix check
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
```



## 12. Testing Your Application
### 1. Section Intro Testing React Components
### 2. Setting up Jest

https://github.com/facebook/jest

```shell
npm install --save-dev jest
```



### 3. Testing Expenses Action Generators

### 4. Testing Filters Action Generators
### 5. Testing Expenses Selector
### 6. Testing Filters Reducer
### 7. Testing Expenses Reducer
### 8. Snapshot Testing
### 9. Enzyme

### 

### 10. Snapshot Testing with Dynamic Components

### 11. Mocking Libraries with Jest

### 12. Testing User Interaction

### 13. Test Spies

### 14. Testing AddExpensePage

### 15. Testing EditExpensePage

### 16. Testing ExpenseListFilters

### 17. Testing ExpenseListFilters Part II

## 13. Deploying Your Apps
### 1. Section Intro Deploying Your Apps
### 2. Installing Git
### 3. What is Git
### 4. Integrating Git into Our Project
### 5. Setting up SSH and Github
### 6. Production Webpack
### 7. Creating Separate CSS Files
### 8. A Production Web Server with Express
### 9. Deploying with Heroku

### 

### 10. Regular vs Development Dependencies

### 11. New Feature Workflow

### 12. Build It Adding Total Selector

### 13. Build It Adding Summary Component

## 14. Firebase 101
### 1. Section Intro Firebase 101
### 2. Getting Firebase
### 3. Writing to the Database
### 4. ES6 Promises
### 5. Promises with Firebase
### 6. Removing Data from Firebase
### 7. Updating Data
### 8. Fetching Data From Firebase
### 9. Array Data in Firebase Part I

### 10. Array Data in Firebase Part II

### 

## 15. Firebase with Redux
### 1. Section Intro Firebase with Redux
### 2. Asynchronous Redux Actions
### 3. Testing Async Redux Actions Part I
### 4. Testing Async Redux Actions Part II
### 5. Creating a Separate Test Database
### 6. Heroku Environment Variables
### 7. Fetching Expenses Part I
### 8. Fetching Expenses Part II
### 9. Remove Expense

### 10. Update Expense

### 

## 16. Firebase Authentication
### 1. Section Intro Firebase Authentication
### 2. Login Page and Google Authentication
### 3. Logging Out
### 4. Redirecting Login or Logout
### 5. The Auth Reducer
### 6. Private Only Routes
### 7. Public Only Routes
### 8. Private Firebase Data
### 9. Data Validation and Deployment
## 17. Styling Budget App
### 1. Section Intro Styling Budget App
### 2. Styling Login Page
### 3. Styling Buttons
### 4. Styling Summary Area
### 5. Styling List Filters
### 6. Styling Inputs
### 7. Styling Expense Form
### 8. Styling Expenses List Part I
### 9. Styling Expenses List Part II

### 

### 10. Adding Loader

### 11. Babel Polyfill

### 12. Final Deployment

## 18. What Now
### 1. Section Into What Now
### 2. Creating the Final Boilerplate
### 3. Budget App Enhancements
### 4. Indecision App Enhancements
### 5. New App Idea Blog
### 6. Until Next Time
## 19. [New!] Hooks, Context, Fragments, and More
### 1. Section Intro
### 2. Using Create React App
### 3. The useState Hook
### 4. useState vs. setState
### 5. Complex State with useState
### 6. The useEffect Hook
### 7. useEffect Dependencies
### 8. Cleaning up Effects
### 9. The useReducer Hook

### 

### 10. The Context API & useContext Hook Part I

### 11. The Context API & useContext Hook Part II

### 12. Fragments

### 13. Creating Custom Hooks