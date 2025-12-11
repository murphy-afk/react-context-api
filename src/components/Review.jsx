export default function Review({ review }) {
  return (
    <div className="border-bottom" >
      <h3>{review.name}</h3><span><p className="fw-light">{review.date}</p></span>
      <p>{review.content}</p>
      <p>RATING: {review.rating}&#9734;</p>
    </div>
  )
}