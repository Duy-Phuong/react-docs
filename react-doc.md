LINK
https://www.youtube.com/watch?v=gL5HBA_1bDQ&list=PLJ5qtRQovuEOoKffoCBzTfvzMTTORnoyp
https://github.com/nghiepuit

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
    <link href="%PUBLIC_URL%/css/bootstrap.min.css" rel="stylesheet">

  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="%PUBLIC_URL%/js/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="%PUBLIC_URL%/js/bootstrap.min.js"></script>
```

Download jquery: Click **Download the compressed, production jQuery 3.4.1**
Luu y: %PUBLIC_URL%