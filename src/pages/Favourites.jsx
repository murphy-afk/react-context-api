import { useCollections } from "../context/CollectionsContext";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

export default function Favourites() {
  const [favItems, setFavItems] = useState([]);
  const { favourites } = useCollections();

  useEffect(() => {

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
        <div className="container">
          <p className="text-light">There are {favourites.length} products in your favourites list</p>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
            {favItems.map((prod) => (
              <Card product={prod} key={prod.id}/>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
