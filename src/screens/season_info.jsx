import React from "react"
import { useParams } from "react-router-dom"

const SeasonInfo = () => {

  const season = useParams().season.split('-')

  const dish =
  {
    title: season[0],
    description: "Winter in Zakliczyn offers a peaceful and scenic escape. The snow-covered landscape invites visitors to enjoy quiet walks, cozy cafés, and the charm of small-town life. Nearby hills and forests are perfect for winter hiking or light outdoor adventures, while local traditions and seasonal events add a festive touch to the colder months.",
    image: `/${season[1]}`,
  }

  return (
    <div className="pt-3 mb-3">
      <h1 className="fw-bold mb-3 text-center">{dish.title} in zakliczyn</h1>
      <img src={dish.image} alt={dish.title} className="w-100 image-main-session" />
      <div className="p-2">
        <h3 className="fw-bold">What to do in {dish.title.toLowerCase()}?</h3>        
        <div className="">
          <p className="fs-5 p-2">{dish.description}</p>
        </div>
      </div>
    </div>
  )
}

export default SeasonInfo