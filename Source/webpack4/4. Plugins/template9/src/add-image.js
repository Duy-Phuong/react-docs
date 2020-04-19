import Kiwi from "./kiwi.jpg";

function addImage() {
  console.log(document);
  const img = document.createElement("img");
  img.src = Kiwi;
  img.alt = "Kiwi";
  img.width = 300;

  const bodyDomElement = document.querySelector("body");
  console.log(bodyDomElement);
  bodyDomElement.appendChild(img);
}

export default addImage;
