import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [indexFlag, setIndexFlag] = useState(0)

  const flags = ['/ru.png', '/pl.png', '/pt.png']

  return (
    <div className="cabecalho d-flex">
      <div className="text-start text-white mt-auto mb-auto">
        <div className="dropdown mt-auto mb-auto language-select pe-2">
          <button className="cabecalho btn text-white p-0 mt-auto mb-auto ps-3 pe-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-bars w-100"></i>
          </button>
          <ul className="dropdown-menu country-select-w p-1">
            <li><Link className="fw-bold btn mt-auto mb-auto text-white text-start" to="/seasons" role="button">Season</Link></li>
            <li><Link className="fw-bold btn mt-auto mb-auto text-white text-start" to="/network" role="button">Network improvement</Link></li>
            <li><Link className="fw-bold btn mt-auto mb-auto text-white text-start" to="/market-strategy" role="button">Market Strategy</Link></li>
            <li><Link className="fw-bold btn mt-auto mb-auto text-white text-start" to="/gastronomy" role="button">Gastronomy</Link></li>
            <li><Link className="fw-bold btn mt-auto mb-auto text-white text-start" to="/menus" role="button">More</Link></li>
          </ul>
        </div>
      </div>

      <div className="d-flex justify-content-center text-center gap-4 p-1 w-100 mt-auto mb-auto">
        <Link className="fw-bold btn mt-auto mb-auto" to="/" role="button">Home</Link>
        <Link className="fw-bold btn mt-auto mb-auto" to="/activities" role="button">Events</Link>
        <Link className="fw-bold btn mt-auto mb-auto" to="/about" role="button">About</Link>
        <Link className="fw-bold btn mt-auto mb-auto" to="/contacts" role="button">Contact</Link>
      </div>
      <div className="mt-auto mb-auto language-select position-relative pe-2">
        <button onClick={() => setIsOpen(!isOpen)} className="btn language-select" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img role="button" className="country-select" src={flags[indexFlag]} alt="" />
        </button>
        <div className={isOpen ? "country-select-w p-1 d-flex flex-column gap-1 align-items-center justify-content-center " : "visually-hidden"} >
          {
            flags.map((flag, index) => {
              return (
                <img role="button" onClick={() => { setIndexFlag(index); setIsOpen(false) }} className="country-select mx-auto" src={flag} alt="" />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar