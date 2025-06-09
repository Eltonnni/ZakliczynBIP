import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="d-flex gap-2 p-2">
      <div className="w-25 p-3 text-center">
        <h1>Zakliczyn Poland</h1>
        <Link to={'/menus'} className="btn btn-index fw-bold rounded-pill mt-5">sprawdz teraz</Link>
        <p className="mt-2 fw-bold">Discover the charm of Zakliczyn, a city full of history and culture. get ready for incredible impressions</p>
       
      </div>

      <div className="w-75">
        <img src="/1.JPG" alt="View of Zakliczyn" className="img-fluid w-100 image"/>
      </div>
    </div>
  )
}

export default Home