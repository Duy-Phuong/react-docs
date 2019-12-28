import React, { Component } from "react";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
  }
  onSave() {
    console.log(this.refs);
    alert(this.refs.name.value);
  }

  // cach 2
  onSave2 = () => {
    console.log(this.refs);
    alert(this.refs.name.value);
  };

  render() {
    var product = {
      id: 1,
      name: "TV",
      status: true
    };

    function showProduct(product) {
      return (
        <div key={product.id}>
          <h5>Name : {product.name}</h5>
          <p>Status: {product.status ? "avaiable" : "out of stock"}</p>
        </div>
      );
    }

    const users = [
      {
        id: 1,
        firstName: "Harper",
        lastName: "Perez"
      },
      {
        id: 2,
        firstName: "John",
        lastName: "Perez2"
      }
    ];

    var elements = users.map((user, index) => {
      return (
        <div key={user.id}>
          <p>
            {index}. firstName: {user.firstName}
          </p>
          <p>lastName: {user.lastName}</p>
          <hr></hr>
        </div>
      );
    });

    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="thumbnail">
            <div className="caption">
              <div>{showProduct(product)}</div>
              <div>{elements}</div>
            </div>
          </div>
        </div>
        <br></br>
        <hr></hr>

        <div className="row">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-success">
              <div className="panel-heading">
                <h3 className="panel-title">Panel title</h3>
              </div>
              <div className="panel-body">
                <div className="form-group">
                  <label>Product name:</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    ref="name"
                  />
                  <br></br>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={this.onSave}
                  >
                    SAVE
                  </button>
                  &nbsp;&nbsp;&nbsp;
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={this.onSave2}
                  >
                    SAVE ARROW FUNC
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
