import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../../Components/SASS/Effects.scss";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

function Effects() {
  const [products, setProducts] = useState([]);
  const [records, setRecords] = useState([]);
  const [cart, setCart] = useState([]);

  async function FetchThedata() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      console.log(result);
      setProducts(result.products);
      setRecords(result.products);
    } catch {
      console.error();
    }
  }
  useEffect(() => {
    FetchThedata();
  }, []);
  const FilteringTheData = (e) => {
    setRecords(
      products.filter((productitem) =>
        productitem.title.toLowerCase().includes(e.target.value)
      )
    );
  };
  const AddToCart = (item) => {
    cart.push({ item });
    console.log(cart);
  };
  return (
    <>
      <h1>HEY THIS IS USEEFFECT HOOK CONCEPT</h1>
      <Container className="d-flex justify-content-center my-lg-2">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search"
          onChange={FilteringTheData}
        />
        <CiSearch size={25} />
      </Container>
      <Container>
        <div className="row">
          {records.map((item, index) => {
            return (
              <>
                <div className="col-lg-3" key={index}>
                  <div className="card border border-primary">
                    <img
                      className="card-img"
                      src={item.thumbnail}
                      alt={item.title}
                    />

                    <div className="card-body">
                      <div className="card-title">
                        <Link to={`/productpage/${item.title}`}>
                          {item.title}
                        </Link>
                      </div>
                      <div className="card-text">{item.description}</div>
                    </div>
                    <button
                      className="btn btn-info w-50 mx-auto my-lg-2"
                      onClick={() => AddToCart(item.id)}
                    >
                      Add to Cart
                    </button>
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

export default Effects;
