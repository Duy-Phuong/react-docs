import React from "react";

function ProductList() {
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

        <button type="button" className="btn btn-success">
          Buy
        </button>
      </div>
    </div>
  );
}

export default ProductList;
