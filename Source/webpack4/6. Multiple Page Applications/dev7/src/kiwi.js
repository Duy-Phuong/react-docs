import Heading from "./components/heading/heading.js";
import KiwiImage from "./components/kiwi-image/kiwi-image.js";
import React from "react";
// import _ from "lodash";

const heading = new Heading();
// heading.render(_.upperFirst("kiwi"));
heading.render("kiwi");
const kiwiImage = new KiwiImage();
kiwiImage.render();
