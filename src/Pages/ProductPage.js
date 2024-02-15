import React from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  let params = useParams();
  console.log(params);
  let details = params.products;
  console.log(details);

  return (
    <>
      <h1>HEY THIS IS PRODUCTS PAGE</h1>
      {details.map((item) => {
        return (
          <>
            <h1>{item.title}</h1>
          </>
        );
      })}
    </>
  );
}

export default ProductPage;
