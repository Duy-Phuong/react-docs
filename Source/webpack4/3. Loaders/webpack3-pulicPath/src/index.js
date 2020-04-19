import hello from "./hello-world";
import Icon from "./cherry.png";
import addImage from "./add-image";

function component() {
  hello();

  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = "Hello world";

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());

addImage();
