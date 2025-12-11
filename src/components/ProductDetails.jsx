export default function ProductDetails({ product }) {
  return (<div className="row">
    <div className="col-6">
      <img src={product.image} alt={product.title} />
    </div>
    <div className="col-6">
      <h2>{product.title}</h2>
      <p className="badge">{product.category}</p>
      <p>{product.description}</p>
      <p className="bg-dark rounded text-center">{product.price}&euro;</p>
      {product.rating && (
        <div>
          <p>Average rating: {product.rating.rate}&#9734;</p>
          <p>Based on {product.rating.count} reviews</p>
        </div>
      )}
      <button className="btn btn-outline-light me-2">BUY NOW</button>
      <button className="btn btn-outline-light">ADD TO CART</button>
    </div>
  </div>)
}