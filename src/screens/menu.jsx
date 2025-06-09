import React from "react"
import { Link } from "react-router-dom"

const Menu = () => {
    const menus = [
        {
          title: "Attrations",
          description: "Zakliczyn offers a charming blend of history, culture, and natural beauty. Its peaceful streets and scenic surroundings invite visitors to slow down and explore. Every corner reveals a piece of the town’s unique character and heritage",
          image: "/1.JPG",
          link: '/markets'
        },
        {
          title: "Gastronomy",
          description: "The cuisine of Zakliczyn is rich, comforting, and deeply rooted in tradition. Its authentic flavors reflect the warmth and generosity of the local culture",
          image: "/zurek.png",
          link: '/gastronomy'
        },
        {
          title: "Activities",
          description: "Local activities in Zakliczyn reflect the town’s vibrant community spirit and connection to nature. From seasonal festivals to outdoor leisure, there's always something to enjoy. It's a place where tradition and everyday life come together with charm",
          image: "/biike.jpg",
          link: '/activities'
        },
      ]

  return (
    <div className="w-75 mx-auto ps-3 pe-3 mb-3">
      <div className="d-flex flex-wrap justify-content-center pt-5 mt-2 gap-2 w-100">
        {menus.map((menu, index) => (
          <Link to={menu.link} className="p-2 card-menu w-25 btn btn-outline-light text-dark text-start" key={index}>
            <img className="w-100" src={`${import.meta.env.BASE_URL}${menu.image}`} alt="image-menu" />
            <h5>{menu.title}</h5>
            <p className="text-break text-wrap text-truncated">{menu.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Menu