import { createContext, useState, useContext } from "react";

const CollectionsContext = createContext();

function CollectionsProvider({ children }) {
  const [favourites, setFavourites] = useState([]);
  const [cart, setCart] = useState([]);

  function isFavourite(id) {
    return favourites.includes(id)
  }

  function addToFavourites(id) {
    setFavourites((current) => [...current, id]);
  }

  function removeFavourite(id) {
    setFavourites((current) => current.filter((favId) => id !== favId))
  }

  function isInCart(id) {
    return cart.includes(id)
  }

  function addToCart(id) {
    setCart((current) => [...current, id]);
  }

  function removeFromCart(id) {
    setCart((current) => current.filter((prodId) => id !== prodId))
  }

  // TODO: handle duplicate products

  const values = {
    favourites,
    setFavourites,
    isFavourite,
    addToFavourites,
    removeFavourite,
    cart,
    setCart,
    isInCart,
    addToCart,
    removeFromCart
  }

  return (
    <CollectionsContext.Provider value={values}>
      {children}
    </CollectionsContext.Provider>
  )
}

function useCollections() {
  const value = useContext(CollectionsContext);
  return value
}

export { CollectionsProvider, useCollections }