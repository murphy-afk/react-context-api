import axios from "axios";
import { useEffect, useState } from "react";

export default function Carousel() {
  const [products, setProducts] = useState([])

  useEffect(() =>
    getProducts()
    , [])

  function getProducts() {
    axios.get('https://fakestoreapi.com/products')
      .then((resp) => {
        const prodData = resp.data;
        setProducts(prodData);
      })
  }
  return (
    <div id="carousel" className="carousel slide w-50">
      <div className="carousel-inner">
        {products.map((product, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={product.id}>
            <img src={product.image} className="d-block w-100" alt="" />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}