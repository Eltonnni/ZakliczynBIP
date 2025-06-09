import React from "react"

const Card = ({ title, description, image }) => {
  return (
    <div>
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Card