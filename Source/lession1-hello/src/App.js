import React, { Component } from "react";
import "./App.css";
import Header from "./Component/Header";
import Product from "./Component/Product";
import ProductList from "./Component/ProductList";
import Robot from "./Component/Robot";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Product></Product>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Product></Product>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Robot name="NEXUS" title="MR001">
              111
            </Robot>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Robot name="NEXUS2" title="MR002">
              222
            </Robot>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Robot name="NEXUS3" title="MR003">
              333
            </Robot>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <ProductList></ProductList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
