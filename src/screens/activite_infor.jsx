import React from "react"
import { useParams } from "react-router-dom"

const ActiviteInfo = () => {

  const params = useParams()

  let imageUrl
  if (params.title?.includes('Bike')) {
    imageUrl = '/biike.jpg'
  } else if (params.title?.includes('River')) {
    imageUrl = '/canoa.jpg'
  } else {
    imageUrl = '/liive.jpg'
  }

  const dish = {
    title: params.title,
    description: "One of the top ways to experience Zakliczyn is on two wheels. The town and its surroundings offer picturesque cycling routes through rolling hills, forests, and riverside paths—perfect for a relaxing ride or a more active adventure. It’s a great way to connect with nature and discover the region at your own pace. Along the way, you’ll pass through charming villages, historical landmarks, and scenic viewpoints that showcase the tranquil beauty of the Polish countryside. Whether you're a casual rider or an avid cyclist, the area offers trails for all levels",
    image: imageUrl,
  }

  return (
    <div className="ps-5 pt-3 pe-5 mb-3">
      <div className="d-flex gap-2">
        <div className="w-75">
          <h1 className="fs-1">{dish.title}</h1>
          <img  src={dish.image}  alt={dish.title || "Imagem do prato"} className="img-fluid w-100 image-market-1"/>
        </div>
        <div className="w-50 text-center">
          <p className="fs-5 pt-5 p-2">{dish.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ActiviteInfo