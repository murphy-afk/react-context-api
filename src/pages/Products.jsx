import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useBudgetMode } from "../context/BudgetContext";


export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { priceLimit, budgetMode } = useBudgetMode();

  useEffect(() =>
    getProducts()
    , [priceLimit, budgetMode])

  function getProducts() {
    setLoading(true)
    axios.get('https://fakestoreapi.com/products')
      .then((resp) => {
        const prodData = resp.data;
        setProducts(prodData);
        (setLoading(false));
      });
  }

  function getFilteredProducts() {
    let filteredProd;
    if (budgetMode) {
      filteredProd = products.filter((prod) => prod.price <= 30);
    }
    else if (priceLimit !== '') {
      filteredProd = products.filter((prod) => prod.price <= priceLimit);
    }
    else {
      filteredProd = products;
    }
    return filteredProd
  }

  return (
    <>
      <div className="container pt-3 w-100 p-0">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
          {loading && <div><p className="text-center fw-bold py-5">Loading...</p></div>}
          {getFilteredProducts(products).map(product => (
            <Card product={product}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </>
  )
}