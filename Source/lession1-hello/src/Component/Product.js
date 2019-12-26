import React from "react";

function Product() {
  var product = {
    id: 1,
    name: "TV",
    status: true
  };

  function showProduct(product) {
    return (
      <div>
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
      <div key="user.id">
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
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="thumbnail">
          <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone8-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795416637"
            alt="image"
          />
          <div className="caption">
            <h3>IPhone</h3>
            <p>15.000.000</p>
            <p>{showProduct(product)}</p>
            <p>{elements}</p>
          </div>
        </div>

        <button type="button" className="btn btn-success">
          Buy
        </button>
      </div>
    </div>
  );
}

export default Product;
