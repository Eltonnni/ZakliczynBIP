// screens/MarketInfo.jsx

import React from "react"
import { useParams } from "react-router-dom"
import places from "./placesData"

const MarketInfo = () => {
  const params = useParams().market.split("-")
  const placeId = params.slice(0, -1).join("-")
  const place = places.find(p => p.id === placeId)

  if (!place) return <p>Local não encontrado.</p>

  return (
    <div className="ps-5 pt-3 pe-5 mb-3">
      <h1 className="fs-1">{place.title}</h1>
      <div className="d-flex gap-4 flex-row align-items-start flex-wrap">
        <div style={{ flexBasis: "55%", maxWidth: "600px" }}>
          <img
            src={`/${place.image}`}
            alt={place.title}
            className="img-fluid rounded"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
        <div className="text-start" style={{ flex: 1 }}>
          <div className="fs-5" dangerouslySetInnerHTML={{ __html: place.description }} />
        </div>
      </div>
    </div>
  )
}

export default MarketInfo
