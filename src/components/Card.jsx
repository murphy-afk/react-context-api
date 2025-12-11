import { Link } from "react-router-dom";
import { useCollections } from "../context/CollectionsContext";
import { useEffect } from "react";

export default function Card({ product }) {
  const { title, id, image, price } = product;
  const { isFavourite, removeFavourite, addToFavourites, isInCart,
    addToCart,
    removeFromCart, } = useCollections()


  return (
    <div className="card bg-secondary col">
      <div className="card-img-top mt-1">
        <div className="action-btns d-flex justify-content-between w-100">
          <span><button
            className={`btn text-danger me-3 fav-btn ${isFavourite(product.id) ? 'bg-danger text-light' : ''}`}
            onClick={() =>
              isFavourite(product.id)
                ? removeFavourite(product.id)
                : addToFavourites(product.id)}
          ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg></button></span>
          <span><button
            className={`btn text-light cart-btn ${isInCart(product.id) ? 'bg-light text-dark' : ''}`}
            onClick={() =>
              isInCart(product.id)
                ? removeFromCart(product.id)
                : addToCart(product.id)}
          ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-plus-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z" />
            </svg></button></span>
        </div>
        <img src={image} alt="" className="border-bottom mt-1" />
        <div className="card-body">
          <h3 className="card-title fs-5">{title}</h3>
          <p className="card-text fw-light">{price}&euro;</p>
          <Link className="text-light"
            to={`/products/${id}`}>Go to details
          </Link>
        </div>
      </div>
    </div>
  )
}