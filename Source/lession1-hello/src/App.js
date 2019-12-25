import React from "react";
import "./App.css";
import Header from "./Component/Header";
import Product from "./Component/Product";

function App() {
  return (
    <div className="App">
      <Header />

      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <Product></Product>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <Product></Product>
        </div>
      </div>
    </div>
  );
}

export default App;
