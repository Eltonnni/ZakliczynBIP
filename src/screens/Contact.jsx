import React from 'react'

const Contact = () => {
  return (
    <div className="container">
      <h1 className='fw-bold text-center mt-4'>Make Contact</h1>
      <div className='d-flex justify-content-center gap-3 p-4'>
        <div className="card w-25 border-white">
          <div className="icon text-center rounded-circle d-flex align-items-center justify-content-center mx-auto p-3">
            <i className="far fa-envelope display-1"></i>
          </div>
          <div className="card-body">
            <p className="card-text text-center">zaklinczyBIP@poland.pl</p>
          </div>
        </div>

        <div className="card w-25 border-white">
          <div className="icon text-center rounded-circle d-flex align-items-center justify-content-center mx-auto p-3">
            <i className="fas fa-phone-volume display-1"></i>
          </div>
          <div className="card-body">
            <p className="card-text text-center">+44 999999999</p>
          </div>
        </div>

        <div className="card w-25 border-white">
          <div className="icon text-center rounded-circle d-flex align-items-center justify-content-center mx-auto p-3">
            <i className="fas fa-map-marker-alt display-1"></i>
          </div>
          <div className="card-body">
            <p className="card-text text-center">Urząd Miejski w Zakliczynie$ul. Rynek 32$32-840 Zakliczyn$Poland</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact