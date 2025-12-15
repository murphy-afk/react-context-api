import { useNavigate } from "react-router-dom"

export default function checkout() {
  const navigate = useNavigate()
  return (
    <div className="container text-center bg-semitransparent py-2 font-monospace text-light">
      <h1>Sorry we're still working on this feature</h1>
      <button className='btn btn-outline-dark mt-0 font-monospace mb-2' onClick={() => navigate('/')}>Go back</button>
      <div>
      <img className="cat-gif rounded" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWZmb2MwZGxiYzg0OWtuNDhhNzM4amJvenU0aWQzbzFzd3R0azh5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gXXFrjHFJIMoqKr8UT/giphy.gif" alt="catgif" />
      </div>
    </div>
  )
}