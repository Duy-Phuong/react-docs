

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
### 4. ES6 Classes Part II
### 5. Creating a React Component
### 6. Nesting Components
### 7. Component Props
### 8. Events & Methods
### 9. Method Binding

### 10. What Is Component State

### 11. Adding State to Counter App Part I

### 12. Adding State to Counter App Part II

### 13. Alternative setState Syntax

### 14. Build It Adding State to VisibilityToggle

### 15. Indecision State Part I

### 16. Indecision State Part II

### 17. Summary Props vs. State

## 5. Stateless Functional Components
### 1. Section Intro Stateless Functional Components
### 2. The Stateless Functional Component
### 3. Default Prop Values
### 4. React Dev Tools
### 5. Removing Individual Options
### 6. Lifecycle Methods
### 7. Saving and Loading Options Data
### 8. Saving and Loading the Count
## 6. Webpack
### 1. Section Intro Webpack
### 10. Source Maps with Webpack
### 11. Webpack Dev Server
### 12. ES6 class properties
### 2. What Is Webpack
### 3. Avoid Global Modules
### 4. Installing & Configuring Webpack
### 5. ES6 importexport
### 6. Default Exports
### 7. Importing npm Modules
### 8. Setting up Babel with Webpack
### 9. One Component per File
## 7. Using a Third-Party Component
### 1. Section Intro Using a Third-Party Component
### 2. Passing Children to Component
### 3. Setting up React-Modal
### 4. Bonus Refactoring Other Stateless Functional Components
## 8. Styling React
### 1. Section Intro Styling React
### 10. Mobile Considerations
### 11. Bonus Favicon
### 2. Setting up Webpack with SCSS
### 3. Architecture and Header Styles
### 4. Reset That $#!
### 5. Theming with Variables
### 6. Big Button & Options List
### 7. Styling the Options List
### 8. Styling Option Item
### 9. Styling React-Modal
## 9. React-Router
### 1. Section Intro React Router
### 2. Server vs. Client Routing
### 3. Setting Up Budget App
### 4. React-Router 101
### 5. Setting up a 404
### 6. Linking Between Routes
### 7. Organizing Our Routes
### 8. Query Strings and URL Parameters
### 9. Build It Router for Portfolio Site

## 10. Redux
### 1. Section Intro Redux
### 10. Working with Multiple Reducers
### 11. ES6 Spread Operator in Reducers
### 12. Spreading Objects
### 13. Wrapping up Our Reducers
### 14. Filtering Redux Data
### 15. Sorting Redux Data
### 2. Why Do We Need Something Like Redux
### 3. Setting up Redux
### 4. Dispatching Actions
### 5. Subscribing and Dynamic Actions
### 6. ES6 Object Destructuring
### 7. ES6 Array Destructuring
### 8. Refactoring and Organizing
### 9. Reducers
## 11. React with Redux
### 1. Section Intro Connecting React and Redux
### 10. Wiring up Add Expense
### 11. Wiring up Edit Expense
### 12. Redux Dev Tools
### 13. Filtering by Dates
### 2. Organizing Redux
### 3. The Higher Order Component
### 4. Connecting Store and Component with React-Redux
### 5. Rendering Individual Expenses
### 6. Controlled Inputs for Filters
### 7. Dropdown for Picking SortBy
### 8. Creating Expense AddEdit Form
### 9. Setting up a Date Picker
## 12. Testing Your Application
### 1. Section Intro Testing React Components
### 10. Snapshot Testing with Dynamic Components
### 11. Mocking Libraries with Jest
### 12. Testing User Interaction
### 13. Test Spies
### 14. Testing AddExpensePage
### 15. Testing EditExpensePage
### 16. Testing ExpenseListFilters
### 17. Testing ExpenseListFilters Part II
### 2. Setting up Jest
### 3. Testing Expenses Action Generators
### 4. Testing Filters Action Generators
### 5. Testing Expenses Selector
### 6. Testing Filters Reducer
### 7. Testing Expenses Reducer
### 8. Snapshot Testing
### 9. Enzyme
## 13. Deploying Your Apps
### 1. Section Intro Deploying Your Apps
### 10. Regular vs Development Dependencies
### 11. New Feature Workflow
### 12. Build It Adding Total Selector
### 13. Build It Adding Summary Component
### 2. Installing Git
### 3. What is Git
### 4. Integrating Git into Our Project
### 5. Setting up SSH and Github
### 6. Production Webpack
### 7. Creating Separate CSS Files
### 8. A Production Web Server with Express
### 9. Deploying with Heroku
## 14. Firebase 101
### 1. Section Intro Firebase 101
### 10. Array Data in Firebase Part II
### 2. Getting Firebase
### 3. Writing to the Database
### 4. ES6 Promises
### 5. Promises with Firebase
### 6. Removing Data from Firebase
### 7. Updating Data
### 8. Fetching Data From Firebase
### 9. Array Data in Firebase Part I
## 15. Firebase with Redux
### 1. Section Intro Firebase with Redux
### 10. Update Expense
### 2. Asynchronous Redux Actions
### 3. Testing Async Redux Actions Part I
### 4. Testing Async Redux Actions Part II
### 5. Creating a Separate Test Database
### 6. Heroku Environment Variables
### 7. Fetching Expenses Part I
### 8. Fetching Expenses Part II
### 9. Remove Expense
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
### 10. Adding Loader
### 11. Babel Polyfill
### 12. Final Deployment
### 2. Styling Login Page
### 3. Styling Buttons
### 4. Styling Summary Area
### 5. Styling List Filters
### 6. Styling Inputs
### 7. Styling Expense Form
### 8. Styling Expenses List Part I
### 9. Styling Expenses List Part II
## 18. What Now
### 1. Section Into What Now
### 2. Creating the Final Boilerplate
### 3. Budget App Enhancements
### 4. Indecision App Enhancements
### 5. New App Idea Blog
### 6. Until Next Time
## 19. [New!] Hooks, Context, Fragments, and More
### 1. Section Intro
### 10. The Context API & useContext Hook Part I
### 11. The Context API & useContext Hook Part II
### 12. Fragments
### 13. Creating Custom Hooks
### 2. Using Create React App
### 3. The useState Hook
### 4. useState vs. setState
### 5. Complex State with useState
### 6. The useEffect Hook
### 7. useEffect Dependencies
### 8. Cleaning up Effects
### 9. The useReducer Hook