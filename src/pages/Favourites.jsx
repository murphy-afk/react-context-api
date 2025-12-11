import { useCollections } from "../context/CollectionsContext";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Favourites() {
  const [favItems, setFavItems] = useState([]);
  const { favourites } = useCollections();

  useEffect(() => {
    if (favourites.length === 0) {
      setFavItems([]);
      return;
    }

    axios.get("https://fakestoreapi.com/products")
      .then((resp) => {
        const prodData = resp.data;
        const filtered = prodData.filter((prod) =>
          favourites.includes(prod.id)
        );
        setFavItems(filtered);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [favourites]);

  return (
    <>
      <h1 className="text-center pt-0 pb-2 bg-secondary w-100">Favourites page</h1>
      {favourites.length === 0 ? (
        <div className="container text-center bg-semitransparent py-2 text-light">
          <p>No favourites yet</p>
        </div>
      ) : (
        <div>
          <h1>There are {favourites.length} products in your favourites list</h1>
          
            {favItems.map((prod) => (
              <div key={prod.id} className="row text-center w-50">
                <h3>{prod.title}</h3>
                <img src={prod.image} alt={prod.title} />
                <p>{prod.price}</p>
              </div>
            ))}
          
        </div>
      )}
    </>
  );
}
