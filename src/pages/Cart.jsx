import { useCollections } from "../context/CollectionsContext";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const { cart } = useCollections();

  useEffect(() => {

    axios.get("https://fakestoreapi.com/products")
      .then((resp) => {
        const prodData = resp.data;
        const filtered = prodData.filter((prod) =>
          cart.includes(prod.id)
        );
        setCartItems(filtered);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cart]);

  return (
    <>
      <h1 className="text-center pt-0 pb-2 bg-secondary w-100">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="container text-center bg-semitransparent py-2 text-light">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div>
          <p className="text-light">There are {cart.length} products in your cart</p>
          {cartItems.map((prod) => (
            <div className="card mb-3 w-75" key={prod.id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={prod.image} className="img-fluid rounded-start" alt={prod.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{prod.title}</h5>
                    <p className="card-text">{prod.description}</p>
                    <p className="card-text">{prod.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
