import React from "react"
import { Link } from "react-router-dom"

const Seasons = () => {
  const seasons = [
    { name: "Winter", image: "winter.jpeg" },
    { name: "Spring", image: "spring.png" },
    { name: "Summer", image: "summer.png" },
    { name: "Autumn", image: "autumn.png" },
  ]

  const seasons_1 = [
    { name: "Spring", image: "spring.png" },
    { name: "Summer", image: "summer.png" },
    { name: "Autumn", image: "autumn.png" },
  ]

  const uri = (imagePath) => {
    if (!imagePath) return 'none'
    return `url(${imagePath})`
  }

  return (
    <div className="w-75 mx-auto mb-3">
      <h1 className="text-center">Zakliczyn Across the Seasons: From Snow to Sunshine</h1>
      <Link to={`/season/${seasons[0].name}-${seasons[0].image}`} role="button" className="row btn text-start d-flex align-items-end justify-content-start text-white image-main-session" style={{ backgroundImage: uri(seasons[0].image), backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h3 className="mt-5">{seasons[0].name}</h3>
      </Link>
      <div className="row mt-2 gap-2">
        {seasons_1.map((season, index) => (
          <Link to={`/season/${season.name}-${season.image}`} role="button" className="col btn image-season d-flex align-items-end justify-content-start text-white" key={index} style={{ backgroundImage: uri(season.image), backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h2>{season.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Seasons