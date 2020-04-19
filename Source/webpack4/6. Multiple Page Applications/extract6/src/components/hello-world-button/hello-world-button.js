import "./hello-world-button.scss";
// import "./hello-world.css";

class HelloWorldButton {
  buttonCssClass = "hello-world-button";

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
