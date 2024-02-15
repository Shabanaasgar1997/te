import React from "react";
import { PRODUCTS } from "../API/ProductsDetails";
import { Container } from "react-bootstrap";
function Products() {
  let data = PRODUCTS;
  console.log(data);
  return (
    <>
      <Container>
        <h1>HEY THIS IS PRODUCT DETAILS</h1>
        <div className="row">
          {PRODUCTS.map((product) => {
            return (
              <>
                <div className="col-lg-3 d-flex">
                  <div class="card p-lg-2 m-lg-1 h-100">
                    <img
                      src={product.image}
                      class="card-img-top img-fluid w-50  mx-auto"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">{product.title}</h5>
                      <p class="card-text">{product.description}</p>
                      <a href="#" class="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default Products;
