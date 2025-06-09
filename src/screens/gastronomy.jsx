import { Link } from "react-router-dom"
import dishes from "./dishesData"

const Gastronomy = () => {
  const basePath = import.meta.env.BASE_URL

  return (
    <div className="ps-5 pe-5 mb-3">
      <h1 className="">Gastronomy</h1>
      <div className="row g-2 justify-content-center">
        {dishes.map((dish) => (
          <div className="col col-4" key={dish.id}>
            <Link
              to={`/gastronomy/${dish.id}`}
              className="btn w-100 p-0 text-start btn-outline-light text-dark"
            >
              <h1 className="display-5 fs-3">{dish.title}</h1>
              <img
                src={`${basePath}${dish.image}`}
                alt={dish.title}
                className="img-fluid w-100 image-gastronomy"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gastronomy
