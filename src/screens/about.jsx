import React from 'react'

const About = () => {
  return (
    <div className="container mt-3">
      <h1 className="fw-bold text-start">Who are we?</h1>
      <p className='display-4 fs-4'>A group of university students from various universities across Europe who took on a project aimed at improving Zakliczyn</p>
      <div className="d-flex gap-2 mb-3">
        <img className='w-75' src="/4.JPG" alt="" />
        <div className='w-25 ps-2'>
          <h1 className="fw-bold text-start">Participants</h1>
          <p className='display-4 fs-4'>Davut Turk</p>
          <p className='display-4 fs-4'>Elton Rodrigues</p>
          <p className='display-4 fs-4'>Joanna Barna</p>
          <p className='display-4 fs-4'>Klaudia Korba</p>
          <p className='display-4 fs-4'>Ligia Oliveira</p>
          <p className='display-4 fs-4'>Martyna Moniak</p>
          <p className='display-4 fs-4'>Olesia Luhanska</p>
          <p className='display-4 fs-4'>Urszula Talarek</p>

        </div>
      </div>

      <div className='d-flex gap-2 justify-content-between mb-3'>
        <img className='w-25 image-footer' src="/stars-eu.png" alt="" />
        <img className='w-25 image-footer' src="/cracow.png" alt="" />
        <img className='w-25 image-footer' src="/ipb.png" alt="" />
        <img className='w-25 image-footer' src="/hanze.png" alt="" />
      </div>

    </div>
  )
}

export default About