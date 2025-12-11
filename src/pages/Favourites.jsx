import { useCollections } from "../context/CollectionsContext"
import { useEffect } from "react";
import axios from "axios";

export default function Favourites() {
  const { favourites } = useCollections();
  console.log(favourites);

  useEffect(() =>
    getProducts()
    , [favourites])

  function getProducts() {
    axios.get('https://fakestoreapi.com/products')
      .then((resp) => {
        const prodData = resp.data;
        const favProdData = [];
        prodData.forEach((prod) => {
          const pId = prod.id;
          if (favourites.includes(pId)) {
            favProdData.push(prod)
          }
        })
        console.log(favProdData);
        
      })
  }

  return (
    <>
      <h1 className="text-center pt-0 pb-2 bg-secondary w-100">Favourites page</h1>
      {favourites.length === 0 ? (
        <div className="container text-center bg-semitransparent py-2 text-light">
          <p>No favourites yet</p>
        </div>) :
        (
          <div>
            <h1>There are {favourites.length} products in your favourites list</h1>
          </div>
        )}
    </>
  );
}