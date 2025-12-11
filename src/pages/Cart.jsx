import { useCollections } from "../context/CollectionsContext"

export default function Favourites() {
  const { cart } = useCollections();
  console.log(cart);

  return (
    <>
      <h1 className="text-center pt-0 pb-2 bg-secondary w-100">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="container text-center bg-semitransparent py-2 text-light">
          <p>Your cart is empty</p>
        </div>) :
        (
          <div>
            <h1>There are {cart.length} products in your cart</h1>
          </div>
        )}
    </>
  );
}