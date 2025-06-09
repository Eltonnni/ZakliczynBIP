import React from "react"
import { Link } from "react-router-dom"


const Activities = () => {
  const activities = [
    {
      title: "Bike Tour",
      image: "/biike.jpg",
    },
    {
      title: "River Trip",
      image: "/rivertrip.png",
    },
    {
      title: "Live Concert",
      image: "/liive.jpg",
    },
  ]

  const uri = (imagePath) => {
    if (!imagePath) return 'none'
    return `url(${imagePath})`
  }

  return (
    <div className="w-75 mx-auto text-center p-3">
      <h1>Top Things to Do in Zakliczyn</h1>
      <div className="d-flex flex-wrap mt-4 gap-1 justify-content-center">
        {activities.map((activity, index) => (
          <Link to={`/activite/infor/${activity.title}`} role="button" className="w-25 btn btn d-flex align-items-end justify-content-center text-center pt-auto text-white rounded-5 image-main-ativities" key={index} style={{ backgroundImage: uri(activity.image), backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h3 className="mt-5">{activity.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Activities