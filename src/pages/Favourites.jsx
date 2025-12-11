import { useCollections } from "../context/CollectionsContext"

export default function Favourites() {
  const { favourites } = useCollections();
  console.log(favourites);

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