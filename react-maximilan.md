C:\Users\phuong\AppData\Local\Programs\Python\Python37\python.exe D:/Source/Source_All/python/Test/readfile.py
======== name dir ========

## 1. Getting Started

### 1. Introduction

### 2. What is React

React is a js library for building user interface (include many Components)

### 2.1 components-learning-card.pdf.pdf

### 3. Real-World SPAs & React Web Apps

### 4. Writing our First React Code

```js
function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Your Age: {props.age}</p>
    </div>
  );
}

var app = (
  <div>
    <Person name="Max" age="28" />
    <Person name="Manu" age="29" />
  </div>
);

// allow render js func as a component to a real DOM
ReactDOM.render(app, document.querySelector("#app"));
```

### 5. Why Should we Choose React

![](./root/img/2020-01-19-14-56-40.png)

### 6. React Alternatives

### 7. Understanding Single Page Applications and Multi Page Applications

![](./root/img/2020-01-19-15-07-15.png)

### 8. Course Outline

![](./root/img/2020-01-19-15-09-27.png)

### 9. How to get the Most out of This Course

### 10. Useful Resources & Links.html

You shouldn't need it right now - but in case you ever want to dive in, here's the official React documenation: https://reactjs.org/

Had issues with the Codepen demo? Here's the finished source code: https://codepen.io/anon/pen/MELQaQ

## 2. Refreshing Next Generation JavaScript (Optional)

### 1. Module Introduction

### 2. Understanding let and const

### 3. Arrow Functions

### 4. Exports and Imports

![](./root/img/2020-01-19-15-38-40.png)
![](./root/img/2020-01-19-15-37-23.png)

### 5. Understanding Classes

### 6. Classes, Properties and Methods

![](./root/img/2020-01-19-15-50-03.png)

### 7. The Spread & Rest Operator

![](./root/img/2020-01-19-15-53-42.png)

```js
const abc = (...args) => {
  return args.filter(el => el === 1);
};
```

### 8. Destructuring

![](./root/img/2020-01-19-16-00-23.png)

### 9. Reference and Primitive Types Refresher

Copy object use ...

### 10. Refreshing Array Functions

```js
const num = [1, 2, 3];
const doubleArr = num.map(x => {
  return 2 * x;
});
```

### 11. Wrap Up

### 12. Next-Gen JavaScript - Summary.html

In this module, I provided a brief introduction into some core next-gen JavaScript features, of course focusing on the ones you'll see the most in this course. Here's a quick summary!

let & const
Read more about let : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

Read more about const : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

let and const basically replace var . You use let instead of var and const instead of var if you plan on never re-assigning this "variable" (effectively turning it into a constant therefore).

ES6 Arrow Functions
Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Arrow functions are a different way of creating functions in JavaScript. Besides a shorter syntax, they offer advantages when it comes to keeping the scope of the this keyword (see here).

Arrow function syntax may look strange but it's actually simple.

```js
function callMe(name) {
    console.log(name);
}
which you could also write as:

const callMe = function(name) {
    console.log(name);
}
becomes:

const callMe = (name) => {
    console.log(name);
}

```

Important:

When having no arguments, you have to use empty parentheses in the function declaration:

```js
const callMe = () => {
    console.log('Max!');
}
When having exactly one argument, you may omit the parentheses:

const callMe = name => {
    console.log(name);
}


```

When just returning a value, you can use the following shortcut:

```js
const returnMe = name => name
That's equal to:

const returnMe = name => {
    return name;
}

```

Exports & Imports
In React projects (and actually in all modern JavaScript projects), you split your code across multiple JavaScript files - so-called modules. You do this, to keep each file/ module focused and manageable.

To still access functionality in another file, you need export (to make it available) and import (to get access) statements.

You got two different types of exports: default (unnamed) and named exports:

default => export default ...;

named => export const someData = ...;

You can import default exports like this:

import someNameOfYourChoice from './path/to/file.js';

Surprisingly, someNameOfYourChoice is totally up to you.

Named exports have to be imported by their name:

import { someData } from './path/to/file.js';

A file can only contain one default and an unlimited amount of named exports. You can also mix the one default with any amount of named exports in one and the same file.

When importing named exports, you can also import all named exports at once with the following syntax:

import \* as upToYou from './path/to/file.js';

upToYou is - well - up to you and simply bundles all exported variables/functions in one JavaScript object. For example, if you export const someData = ... (/path/to/file.js ) you can access it on upToYou like this: upToYou.someData .

Classes
Classes are a feature which basically replace constructor functions and prototypes. You can define blueprints for JavaScript objects with them.

Like this:

```js
class Person {
  constructor() {
    this.name = "Max";
  }
}

const person = new Person();
console.log(person.name); // prints 'Max'
```

In the above example, not only the class but also a property of that class (=> name ) is defined. The syntax you see there, is the "old" syntax for defining properties. In modern JavaScript projects (as the one used in this course), you can use the following, more convenient way of defining class properties:

class Person {
name = 'Max';
}

const person = new Person();
console.log(person.name); // prints 'Max'
You can also define methods. Either like this:

```js
class Person {
    name = 'Max';
    printMyName () {
        console.log(this.name); // this is required to refer to the class!
    }
}

const person = new Person();
person.printMyName();
Or like this:

class Person {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();

```

The second approach has the same advantage as all arrow functions have: The this keyword doesn't change its reference.

You can also use inheritance when using classes:

```js
class Human {
  species = "human";
}

class Person extends Human {
  name = "Max";
  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();
console.log(person.species); // prints 'human'
```

Spread & Rest Operator
The spread and rest operators actually use the same syntax: ...

Yes, that is the operator - just three dots. It's usage determines whether you're using it as the spread or rest operator.

Using the Spread Operator:

The spread operator allows you to pull elements out of an array (=> split the array into a list of its elements) or pull the properties out of an object. Here are two examples:

```js
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // This now is [1, 2, 3, 4, 5];
Here's the spread operator used on an object:

const oldObject = {
    name: 'Max'
};
const newObject = {
    ...oldObject,
    age: 28
};
newObject  would then be

{
    name: 'Max',
    age: 28
}

```

The spread operator is extremely useful for cloning arrays and objects. Since both are reference types (and not primitives), copying them safely (i.e. preventing future mutation of the copied original) can be tricky. With the spread operator you have an easy way of creating a (shallow!) clone of the object or array.

Destructuring
Destructuring allows you to easily access the values of arrays or objects and assign them to variables.

Here's an example for an array:

```js
const array = [1, 2, 3];
const [a, b] = array;
console.log(a); // prints 1
console.log(b); // prints 2
console.log(array); // prints [1, 2, 3]
And here for an object:

const myObj = {
    name: 'Max',
    age: 28
}
const {name} = myObj;
console.log(name); // prints 'Max'
console.log(age); // prints undefined
console.log(myObj); // prints {name: 'Max', age: 28}
Destructuring is very useful when working with function arguments. Consider this example:

const printName = (personObj) => {
    console.log(personObj.name);
}
printName({name: 'Max', age: 28}); // prints 'Max'

```

Here, we only want to print the name in the function but we pass a complete person object to the function. Of course this is no issue but it forces us to call personObj.name inside of our function. We can condense this code with destructuring:

const printName = ({name}) => {
console.log(name);
}
printName({name: 'Max', age: 28}); // prints 'Max')
We get the same result as above but we save some code. By destructuring, we simply pull out the name property and store it in a variable/ argument named name which we then can use in the function body.

### 12.1 next-gen-js-summary.pdf.pdf

### 13. JS Array Functions.html

Not really next-gen JavaScript, but also important: JavaScript array functions like map() , filter() , reduce() etc.

You'll see me use them quite a bit since a lot of React concepts rely on working with arrays (in immutable ways).

The following page gives a good overview over the various methods you can use on the array prototype - feel free to click through them and refresh your knowledge as required: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Particularly important in this course are:

map() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

## 3. Understanding the Base Features & Syntax

### 1. Module Introduction

### 2. The Build Workflow

![](./root/img/2020-01-19-16-31-14.png)

### 3. Using Create React App

```ts
npm install -g create-react-app --scripts-version 1.1.5
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

### 4. Understanding the Folder Structure

https://quoctuan.info/bai-02-cau-truc-ung-dung-co-trong-reactjs.1.2.html

### 4.1 ide-setup.pdf.pdf

**Editor / IDE Setup**
My Setup
In this course, I use Microsoﬞ Visual Studio Code which is a great free-to-use Web Development IDE.
It’s a different IDE than Microsoﬞ Visual Studio - don’t mix them up. The laמּer is NOT free and also not as suited for JavaScript Web Development as Visual
Studio Code is.
If you just installed VS Code, it’s going to look different than in my videos. That’s because I’m using a different theme and icons. In general, you can install a lot
of free extensions for VS Code to customise it to your needs and requirements (both visually as well as from the functionality offered).
• Theme: Dark+ (default theme, no extension required)
• Icons: Material Icons (extension: hמּps://marketplace.visualstudio.com/
items?itemName=PKief.material-icon-theme)
Feel free to browse the extension marketplace for more useful extensions!
**Alternatives**
If you don’t want to use VS Code but also don’t have you favourite IDE/ editor,
here are the common alternatives:
• Webstorm: hמּps://www.jetbrains.com/webstorm/ (not free)
• Sublime Text: hמּps://www.sublimetext.com/ (free unlimited trial)
• Atom: hמּps://atom.io/ (free)

### 5. Understanding Component Basics

### 5.1 components-learning-card.pdf.pdf

### 6. Understanding JSX

SD thay phan return trong ham render de test

```js
import React from "react";
import ReactDOM from "react-dom";

const list = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "My favorite ice cream flavors"),
  React.createElement("ul", {}, [
    React.createElement("li", { class: "brown" }, "Chocolate"),
    React.createElement("li", { class: "white" }, "Vanilla"),
    React.createElement("li", { class: "yellow" }, "Banana")
  ])
);

ReactDOM.render(list, document.getElementById("global"));
```

### 7. JSX Restrictions

You can use JSX to write code html in .js file

- cannot use class to set css in file .js so you should replece it with "className"
- Wrap everything in a root tag: div

### 8. Creating a Functional Component

Create class Person

```js
import React from "react";

const person = props => {
  return (
    <div>
      <p>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
```

App.js

```js
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29">
          My Hobbies: Racing
        </Person>
        <Person name="Stephanie" age="26" />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
```

### 9. Components & JSX Cheat Sheet.html

Components are the core building block of React apps. Actually, React really is just a library for creating components in its core.

A typical React app therefore could be depicted as a component tree - having one root component ("App") and then an potentially infinite amount of nested child components.

Each component needs to return/ render some JSX code - it defines which HTML code React should render to the real DOM in the end.

JSX is NOT HTML but it looks a lot like it. Differences can be seen when looking closely though (for example className in JSX vs class in "normal HTML"). JSX is just syntactic sugar for JavaScript, allowing you to write HTMLish code instead of nested React.createElement(...) calls.

When creating components, you have the choice between two different ways:

1. Functional components (also referred to as "presentational", "dumb" or "stateless" components - more about this later in the course) => const cmp = () => { return <div>some JSX</div> } (using ES6 arrow functions as shown here is recommended but optional)
   class-based components (also referred to as "containers", "smart" or "stateful" components) => class Cmp extends
2. Component { render () { return <div>some JSX</div> } }
   We'll of course dive into the difference throughout this course, you can already note that you should use 1) as often as possible though. It's the best-practice.

### 9.1 components.pdf.pdf

### 10. Working with Components & Re-Using Them

### 11. Outputting Dynamic Content

Write js code in {} in person.js file

### 12. Working with Props

![](./root/img/2020-01-19-18-09-16.png)

### 12.1 props-learning-card.pdf.pdf

### 13. Understanding the Children Property

props.children print value in the middle of tag

### 14. Understanding & Using State

State is managed inside the Component

```js
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  // Add
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: "some other value"
  };

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
```

### 15. Props & State.html

### 15.1 props&state.pdf.pdf

![](./root/img/2020-01-19-18-51-39.png)

### 16. Handling Events with Methods

### 17. To Which Events Can You Listen.html

### 18. Manipulating the State

### 18.1 state-learning-card.pdf.pdf

### 19. Function Components Naming.html

In the next lecture, we'll learn how to manage state in functional components (instead of class-based components).

In case you're getting an error with the code shown in the next lecture, simply assign a capitalized variable name to the variable that holds your functional component.

Example:

Use

const App = () => { ... }
instead of

const app = () => { ... }
Technically, that's not required but depending on your project setup, the built-in linter (a code quality checking tool) that comes with create-react-app might not like the lowercase variable name.

You can also avoid this by creating projects with the right react-scripts version, which I would recommend for this course anyways (see the setup video, lecture 26)

create-react-app my-app --scripts-version 1.1.5

> React 16.8

### 20. Using the useState() Hook for State Manipulation

```js
import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  // use State always return two elements
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ]
  });

  const [otherState, setOtherState] = useState("some other value");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    setPersonsState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
};

export default app;
```

### 20.3 usestate-learning-card.pdf.pdf

![](./root/img/2020-01-19-19-39-00.png)

### 21. Stateless vs Stateful Components

Stateful is a component that manage state
Stateless is a component that doesn’t manage state

### 22. Passing Method References Between Components

Click on paragraph => have two way to call func with params(use arrow func is not recommend)
App.js

```js

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  render () {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
```

Person.js

```js
import React from "react";

const person = props => {
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
```

### 23. Adding Two Way Binding

person.js

```js
<input type="text" onChange={props.changed} value={props.name} />
```

Them value={props.name} moi bi error

### 24. Adding Styling with Stylesheets

28.3 base-syntax--03-finished.zip
add person.css

```css
.Person {
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
}
```

thanks to webpack you can import css file in js file
class => className

### 25. Working with Inline Styles

```js
render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
```

### 26. Time to Practice - The Base Syntax.html

### 27. [OPTIONAL] Assignment Solution

### 28. Useful Resources & Links.html

## 4. Working with Lists and Conditionals

### 1. Module Introduction

### 10. Wrap Up

### 11. Time to Practice - Lists & Conditionals.html

### 12. [OPTIONAL] Assignment Solution

### 13. Useful Resources & Links.html

### 2. Rendering Content Conditionally

Them thuoc tinh showPersons: false
App.js

```js
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  switchNameHandler = newName => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 }
      ]
    });
  };

  // Add
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max!")}
            changed={this.nameChangedHandler}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
```

// Cach 2
{
this.state.showPersons === true ? html code : null
}

### 2.1 jsx-conditionals-learning-card.pdf.pdf

### 3. Handling Dynamic Content The JavaScript Way

### 4. Outputting Lists (Intro)

### 5. Outputting Lists

### 5.1 jsx-lists-learning-card.pdf.pdf

### 6. Lists & State

### 7. Updating State Immutably

### 8. Lists & Keys

### 9. Flexible Lists

## 5. Styling React Components & Elements

### 1. Module Introduction

### 10. Adding Pseudo Selectors

### 11. Working with Media Queries

### 12. Useful Resources & Links.html

### 2. Outlining the Problem Set

### 3. Setting Styles Dynamically

### 4. Setting Class Names Dynamically

### 5. Adding and Using Radium

### 6. Using Radium for Media Queries

### 7. MUST READ Enabling CSS Modules.html

### 8. Enabling & Using CSS Modules

### 8.1 css-modules-learning-card.pdf.pdf

### 9. More on CSS Modules.html

## 6. Debugging React Apps

### 1. Module Introduction

### 2. Understanding Error Messages

### 3. Finding Logical Errors by using Dev Tools & Sourcemaps

### 4. Working with the React Developer Tools

### 5. Using Error Boundaries (React 16+)

### 6. Wrap Up

### 7. Useful Resources & Links.html

## 7. Diving Deeper into Components & React Internals

### 1. Module Introduction

### 10. Using useEffect() in Functional Components

### 11. Controlling the useEffect() Behavior

### 12. Cleaning up with Lifecycle Hooks & useEffect()

### 13. Cleanup Work with useEffect() - Ex

### 14. Using shouldComponentUpdate for Optimization

### 14.1 Reference vs Primitive Types.html

### 15. Optimizing Functional Components with React.memo()

### 16. When should you optimize

### 17. PureComponents instead of shouldComponentUpdate

### 18. How React Updates the DOM

### 19. Rendering Adjacent JSX Elements

### 19.1 react-adjacent-jsx.pdf.pdf

### 2. A Better Project Structure

### 20. Windows Users Must Read.html

### 21. Using React.Fragment

### 22. Higher Order Components (HOC) - Introduction

### 23. Another Form of HOCs

### 24. Passing Unknown Props

### 25. Setting State Correctly

### 26. Using PropTypes

### 27. Using Refs

### 28. Refs with React Hooks

### 29. Understanding Prop Chain Problems

### 3. Splitting an App Into Components

### 30. Using the Context API

### 31. contextType & useContext()

### 32. Wrap Up

### 33. Useful Resources & Links.html

### 34. MUST READ Legacy Lectures.html

### 35. [LEGACY] Splitting an App Into Components

### 36. [LEGACY] Comparing Stateless and Stateful Components

### 37. [LEGACY] Understanding the Component Lifecycle

### 38. [LEGACY] Converting Stateless to Stateful Components

### 39. [LEGACY] Component Creation Lifecycle in Action

### 39.1 lifecycle-creation-learning-card.pdf.pdf

### 4. Comparing Stateless and Stateful Components

### 40. [LEGACY] componentWillUnmount().html

### 41. [LEGACY] Component Updating Lifecycle Hooks

### 42. [LEGACY] Component Updating Lifecycle in Action

### 42.1 lifecycle-update-external-learning-card.pdf.pdf

### 43. [LEGACY] Updating Lifecycle Hooks (Triggered by State Changes)

### 43.1 lifecycle-update-internal-learning-card.pdf.pdf

### 44. [LEGACY] Performance Gains with PureComponents

### 45. [LEGACY] How React Updates the App & Component Tree

### 46. [LEGACY] Understanding React's DOM Updating Strategy

### 47. [LEGACY] Windows Users Must Read - File Downloads.html

### 48. [LEGACY] Returning Adjacent Elements (React 16+)

### 49. [LEGACY] React 16.2 Feature Fragments.html

### 5. Class-based vs Functional Components

### 50. [LEGACY] Understanding Higher Order Components (HOCs)

### 51. [LEGACY] A Different Approach to HOCs

### 52. [LEGACY] Passing Unknown Props

### 53. [LEGACY] Using setState Correctly

### 54. [LEGACY] Validating Props

### 55. [LEGACY] Available PropTypes.html

### 56. [LEGACY] Using References (ref)

### 57. [LEGACY] More on the React ref API (16.3)

### 58. [LEGACY] The Context API (React 16.3)

### 59. [LEGACY] More on the Context API (16.6)

### 6. class Component Lifecycle Overview

### 60. [LEGACY] Updated Lifecycle Hooks (React 16.3)

### 61. [LEGACY] The memo Method (16.4)

### 62. [LEGACY] Wrap Up

### 63. [LEGACY] Useful Resources & Links.html

### 7. Component Creation Lifecycle in Action

### 7.1 lifecycle-creation-learning-card.pdf.pdf

### 8. Component Update Lifecycle (for props Changes)

### 8.1 lifecycle-update-external-learning-card.pdf.pdf

### 9. Component Update Lifecycle (for state Changes)

## 8. A Real App The Burger Builder (Basic Version)

### 1. About React Hooks.html

### 10. Adding Prop Type Validation

### 11. Starting the Burger Component

### 12. Outputting Burger Ingredients Dynamically

### 13. Calculating the Ingredient Sum Dynamically

### 14. Adding the Build Control Component

### 15. Outputting Multiple Build Controls

### 16. Connecting State to Build Controls

### 17. Removing Ingredients Safely

### 18. Displaying and Updating the Burger Price

### 19. Adding the Order Button

### 2. Module Introduction

### 20. Creating the Order Summary Modal

### 21. Showing & Hiding the Modal (with Animation!)

### 22. Implementing the Backdrop Component

### 23. Adding a Custom Button Component

### 24. Implementing the Button Component

### 25. Adding the Price to the Order Summary

### 26. Adding a Toolbar

### 27. Using a Logo in our Application

### 28. Adding Reusable Navigation Items

### 29. Creating a Responsive Sidedrawer

### 3. Planning an App in React - Core Steps

### 30. Working on Responsive Adjustments

### 31. More about Responsive Adjustments

### 32. Reusing the Backdrop

### 33. Adding a Sidedrawer Toggle Button

### 34. Adding a Hamburger Icon

### 35. Improving the App - Introduction

### 36. Prop Type Validation

### 37. Improving Performance

### 38. Using Component Lifecycle Methods

### 39. Changing the Folder Structure

### 4. Planning our App - Layout and Component Tree

### 40. Wrap Up

### 41. Useful Resources & Links.html

### 5. Planning the State

### 6. Setting up the Project

### 7. Creating a Layout Component

### 8. Starting Implementation of The Burger Builder Container

### 9. Adding a Dynamic Ingredient Component

## 9. Reaching out to the Web (Http Ajax)

### 1. Module Introduction

### 10. Sending a DELETE Request

### 11. Fixing a Bug

### 12. Handling Errors Locally

### 13. Adding Interceptors to Execute Code Globally

### 14. Removing Interceptors.html

### 15. Setting a Default Global Configuration for Axios

### 16. Creating and Using Axios Instances

### 17. Wrap Up

### 18. Useful Resources & Links.html

### 2. Understanding Http Requests in React

### 3. Understanding our Project and Introducing Axios

### 4. Creating a Http Request to GET Data

### 5. Rendering Fetched Data to the Screen

### 6. Transforming Data

### 7. Making a Post Selectable

### 8. Fetching Data on Update (without Creating Infinite Loops)

### 9. POSTing Data to the Server

## 10. Burger Builder Project Accessing a Server

### 1. Module Introduction

### 10. Useful Resources & Links.html

### 2. Firebase & The Right Database.html

### 3. Creating the Firebase Project

### 4. Creating the Axios Instance

### 5. Sending a POST Request

### 6. Displaying a Spinner while Sending a Request

### 7. Handling Errors

### 8. Retrieving Data from the Backend

### 9. Removing Old Interceptors

## 11. Multi-Page-Feeling in a Single-Page-App Routing

### 1. Module Introduction

### 10. Using Links to Switch Pages

### 11. Using Routing-Related Props

### 12. The withRouter HOC & Route Props

### 13. Absolute vs Relative Paths

### 14. Absolute vs Relative Paths (Article).html

### 15. Styling the Active Route

### 16. Passing Route Parameters

### 17. Extracting Route Parameters

### 18. Parsing Query Parameters & the Fragment.html

### 19. Using Switch to Load a Single Route

### 2. Routing and SPAs

### 2.1 routing-learning-card.pdf.pdf

### 20. Navigating Programmatically

### 21. Additional Information Regarding Active Links

### 22. Understanding Nested Routes

### 23. Creating Dynamic Nested Routes

### 24. Redirecting Requests

### 25. Conditional Redirects

### 26. Using the History Prop to Redirect (Replace)

### 27. Working with Guards

### 28. Handling the 404 Case (Unknown Routes)

### 29. Loading Routes Lazily

### 3. Setting Up Links

### 30. Lazy Loading with React Suspense (16.6)

### 31. Routing and Server Deployment

### 32. Time to Practice - Routing.html

### 33. Wrap Up

### 34. Useful Resources & Links.html

### 4. Setting Up the Router Package

### 5. react-router vs react-router-dom.html

### 6. Preparing the Project For Routing

### 7. Setting Up and Rendering Routes

### 8. Rendering Components for Routes

### 9. Switching Between Pages

## 12. Adding Routing to our Burger Project

### 1. Module Introduction

### 10. Implementing Navigation Links

### 11. Fetching Orders

### 12. Outputting the Orders

### 13. Wrap Up

### 14. Useful Resources & Links.html

### 2. Building the Checkout Container

### 3. Setting Up Routing & Routes

### 4. Navigating to the Checkout Page

### 5. Navigating Back & To Next Page

### 6. Passing Ingredients via Query Params

### 7. Navigating to the Contact Data Component

### 8. Order Submission & Passing Data Between Pages

### 9. Adding an Orders Page

## 13. Forms and Form Validation

### 1. Module Introduction

### 10. Fixing a Common Validation Gotcha

### 11. Adding Validation Feedback

### 12. Improving Visual Feedback

### 13. Showing Error Messages.html

### 14. Handling Overall Form Validity

### 15. Working on an Error

### 16. Fixing a Bug

### 17. Useful Resources & Links.html

### 2. Analyzing the App

### 3. Creating a Custom Dynamic Input Component

### 4. Setting Up a JS Config for the Form

### 5. Dynamically Create Inputs based on JS Config

### 6. Adding a Dropdown Component

### 7. Handling User Input

### 8. Handling Form Submission

### 9. Adding Custom Form Validation

## 14. Redux

### 1. Module Introduction

### 10. Dispatching Actions from within the Component

### 11. Time to Practice - Dispatching Actions.html

### 12. Passing and Retrieving Data with Action

### 13. Switch-Case in the Reducer

### 14. Updating State Immutably

### 15. Updating Arrays Immutably

### 16. Immutable Update Patterns.html

### 17. Outsourcing Action Types

### 18. Combining Multiple Reducers

### 19. Understanding State Types

### 19.1 state-types.pdf.pdf

### 2. Understanding State

### 20. Time to Practice - Redux Basics.html

### 21. [OPTIONAL] Assignment Solution

### 22. Combining Local UI State and Redux

### 23. Wrap Up

### 24. Useful Resources & Links.html

### 3. The Complexity of Managing State

### 4. Understanding the Redux Flow

### 4.1 redux-learning-card.pdf.pdf

### 5. Setting Up Reducer and Store

### 6. Dispatching Actions

### 7. Adding Subscriptions

### 8. Connecting React to Redux

### 9. Connecting the Store to React

## 15. Adding Redux to our Project

### 1. Module Introduction

### 10. Useful Resources & Links.html

### 2. Installing Redux and React Redux

### 3. Basic Redux Setup

### 4. Finishing the Reducer for Ingredients

### 5. Connecting the Burger Builder Container to our Store

### 6. Working on the Total Price Calculation

### 7. Redux & UI State

### 8. Adjusting Checkout and Contact Data

### 9. Wrap Up

## 16. Redux Advanced

### 1. Module Introduction

### 10. Using Action Creators and Get State

### 11. Using Utility Functions

### 12. A Leaner Switch Case Statement

### 13. An Alternative Folder Structure

### 14. Diving Much Deeper

### 15. Wrap Up

### 16. Useful Resources & Links.html

### 2. Adding Middleware

### 3. Using the Redux Devtools

### 4. Executing Asynchronous Code - Introduction

### 5. Introducing Action Creators

### 6. Action Creators & Async Code

### 7. Handling Asynchronous Code

### 8. Restructuring Actions

### 9. Where to Put Data Transforming Logic

## 17. Redux Advanced Burger Project

### 1. Module Introduction

### 10. Connecting Contact Data Container & Actions

### 11. The Order Reducer

### 12. Working on Order Actions

### 13. Redirect to Improve UX

### 14. Combining Reducers

### 15. Handling Purchases & Updating the UI

### 16. Resetting the Price after Purchases

### 17. Fetching Orders (via Redux)

### 18. Checking our Implemented Functionalities

### 19. Refactoring Reducers

### 2. Installing the Redux Devtools

### 20. Refactoring Reducers Continued

### 21. Wrap Up

### 22. Useful Resources & Links.html

### 3. Preparing the Folder Structure

### 4. Creating Action Creators

### 5. Executing Asynchronous Code

### 6. Fetching Ingredients Asynchronously

### 7. Initializing Ingredients in the BurgerBuilder

### 8. Changing the Order of our Ingredients Manually

### 9. Adding Order Actions

## 18. Adding Authentication to our Burger Project

### 1. Module Introduction

### 10. Logging Users Out

### 11. Accessing Protected Resources

### 12. Updating the UI Depending on Auth State

### 13. Adding a Logout Link

### 14. Forwarding Unauthenticated Users

### 15. Redirecting the User to the Checkout Page

### 16. Persistent Auth State with localStorage

### 17. Fixing Connect + Routing Errors

### 18. Ensuring App Security

### 19. Guarding Routes

### 2. Understanding Authentication in Single Page Applications

### 20. Displaying User Specific Orders

### 21. Wrap Up

### 22. Useful Resources & Links.html

### 3. Required App Adjustments

### 4. Adding an Auth Form

### 5. Adding Actions

### 6. Getting a Token from the Backend

### 7. Adding Sign-In

### 8. Storing the Token

### 9. Adding a Spinner

## 19. Improving our Burger Project

### 1. Module Introduction

### 2. Fixing the Redirect to the Frontpage

### 3. Using updateObject in the Entire App

### 4. Sharing the Validation Method

### 5. Using Environment Variables

### 6. Removing console.log()s

### 7. Adding Lazy Loading

### 8. Wrap Up

### 9. Useful Resources & Links.html

## 20. Testing

### 1. Module Introduction

### 10. How to Test Redux

### 11. Wrap Up

### 12. Useful Resources & Links.html

### 2. What is Testing

### 3. Required Testing Tools

### 4. What To Test

### 5. Writing our First Test

### 6. Testing Components Continued

### 7. Jest and Enzyme Documentations

### 8. Testing Components Correctly

### 9. Testing Containers

## 21. Deploying the App to the Web

### 1. Module Introduction

### 2. Deployment Steps

### 3. Building the Project

### 4. Example Deploying on Firebase

### 5. Wrap Up

### 6. Useful Resources & Links.html

## 22. Bonus Working with Webpack

### 1. Module Introduction

### 10. Setting Up the Basic Webpack Config

### 11. Adding File Rules

### 12. Introducing Babel

### 13. Adding CSS File Support

### 14. Creating Rules for Images

### 15. Lazy Loading

### 16. Injecting the Script into the index.html File

### 16. Injecting the Script into the index.html File.vtt

### 17. Creating the Production Workflow

### 18. Wrap Up

### 19. Adding babel-polyfill.html

### 2. Important Use Webpack 3.html

### 20. Useful Resources & Links.html

### 3. Introducing Webpack

### 4. How Webpack works

### 5. Basic Workflow Requirements

### 6. Project & npm Setup

### 7. Creating a Basic Folder & File Structure

### 8. Creating the Basic React Application

### 9. Installing Production Dependencies

## 23. Bonus Next.js

### 1. Module Introduction

### 10. Useful Resources & Links.html

### 2. Understanding Server Side Rendering

### 3. Setting Up a Project

### 4. Understanding the Basics

### 5. Next.js & Components & Pages

### 6. Styling our App in Next.js

### 7. Handling (404) Errors

### 8. A Special Lifecycle Hook

### 9. Deploying our App

## 24. Bonus Animations in React Apps

### 1. Module Introduction

### 10. Transition Events

### 11. The CSSTransition Component

### 12. Customizing CSS Classnames

### 13. Animating Lists

### 14. Alternative Animation Packages

### 15. Wrap Up

### 16. Useful Resources & Links.html

### 2. Preparing the Demo Project

### 3. Using CSS Transitions

### 4. Using CSS Animations

### 5. CSS Transition & Animations Limitations

### 6. Using ReactTransitionGroup

### 7. Using the Transition Component

### 8. Wrapping the Transition Component

### 9. Animation Timings

## 25. Bonus A Brief Introduction to Redux Saga

### 1. Module Introduction

### 10. Moving the Orders Side Effects into Sagas

### 11. Why Sagas can be Helpful

### 12. Diving Deeper into Sagas

### 13. Useful Resources & Links.html

### 2. Installing Redux Saga

### 3. Creating our First Saga

### 4. Hooking the Saga Up (to the Store and Actions)

### 5. Moving Logic from the Action Creator to a Saga

### 6. Moving More Logic Into Sagas

### 7. Handling Authentication with a Saga

### 8. Handling Auto-Sign-In with a Saga

### 9. Moving the BurgerBuilder Side Effects into a Saga

## 26. React Hooks

### 1. Introduction

### 10. The useEffect() Hook

### 11. Controlling Effect Execution

### 12. Effect Cleanup

### 13. Converting the App Component

### 14. The useContext() Hook

### 15. State and Effects Gotchas

### 16. The useReducer() Hook

### 17. useReducer() vs useState()

### 18. Working with References and useRef()

### 19. Preparing & Optimizing

### 2. What are Hooks

### 20. Avoiding Unnecessary Re-Rendering

### 21. How to think about Functional Components with Hooks

### 22. Creating a Custom Hook

### 23. Wrap Up

### 3. Enabling Hooks

### 4. The useState() Hook

### 5. Adding Array Destructuring

### 6. Using Multiple State

### 7. Using One State Instead

### 8. The Rules of Hooks

### 9. Sending Data via Http

## 27. Using Hooks in the Burger Builder

### 1. Introduction

### 10. Using React.memo() & More!

### 11. Adding a Custom Error Handling Hook

### 12. Wrap Up

### 13. Useful Resources & Links.html

### 2. Converting App

### 3. Routing with React.lazy()

### 4. Converting the Layout Component

### 5. Converting withErrorHandler HOC

### 6. Adjusting the Order & Checkout Containers

### 7. Add Hooks to ContactData

### 8. Converting the BurgerBuilder Container

### 9. Adjusting Auth & Logout Components

## 28. Bonus Building the Burger CSS

### 1. Building the Burger CSS Code

### 1.1 burger-css.pdf.pdf

## 29. Next Steps and Course Roundup

### 1. Module Introduction

### 10. Bonus More Content!.html

### 2. React Rocks! Where to find more Examples

### 3. More Inspiration Real-World Projects Built with React

### 4. Static React Apps with Gatsby.js

### 5. Introducing React Native

### 6. Component Libraries (Example Material UI)

### 7. Smaller Apps with Preact

### 8. Comparing React with Preact

### 9. Congratulations
