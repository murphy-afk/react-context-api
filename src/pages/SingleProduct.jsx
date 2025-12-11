import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
import { reviews } from '../assets/reviews'
import Review from "../components/Review";
import ProductDetails from "../components/ProductDetails";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((resp) => {
        if (resp.data === '') {
          navigate('/products')
        }
        else {
          setProduct(resp.data)
          setLoading(false)
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Product doesn't exist");
        navigate("/products");
      })
  }, [id])

  return (
    <>
      {loading && <div><p className="text-center fw-bold py-5">Loading...</p></div>}
      {product !== null &&
        <div>
          {/* <button onClick={() => navigate('/products')}>test</button> */}
          <h1 className="text-center pt-0 pb-2 bg-secondary w-100">Product details</h1>
          <div className="container p-2 rounded card-details bg-semitransparent text-light">
            <ProductDetails product={product} />
            <div className="row">
              <div className="col-12">
                <h2 className="border-bottom py-3">Reviews</h2>
                {reviews.map((review) => (
                  <Review key={review.id} review={review} />
                ))
                }
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}