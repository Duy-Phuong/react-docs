import hello from "./hello-world";
import Icon from "./cherry.png";
import addImage from "./add-image";
import HelloWorldButton from "./components/hello-world-button/hello-world-button";

function component() {
  hello();

  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = "Hello webpack";

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());

addImage();
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
