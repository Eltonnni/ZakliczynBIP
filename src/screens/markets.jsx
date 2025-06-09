// screens/Markets.jsx

import React from "react"
import { Link } from "react-router-dom"
import places from "./placesData"

const Markets = () => {
  const uri = (imagePath) => {
    if (!imagePath) return 'none'
    return `url(${imagePath})`
  }

  return (
    <div className="w-100 justify-content-center d-flex">
      <div className="row row-cols-1 row-cols-md-3 g-4 p-4 w-75">
        <div className="col-12">
          <h1 className="text-center">Discover Zakliczyn: A Hidden Gem in Poland!</h1>
        </div>

        {places.map((place, index) => (
          <div className="col" key={index}>
            <Link
              to={`/markets/info/${place.id}-${place.image}`}
              className="btn image-market d-flex align-items-end justify-content-start text-white w-100"
              style={{
                backgroundImage: uri(place.image),
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "250px",
                borderRadius: "8px"
              }}
            >
              <h5 className="m-2">{place.title}</h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Markets
