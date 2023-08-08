import React from 'react'

export default function CarrouselImg({img}) {
  return (
    <>
    <div className="carousel-item" data-bs-interval="2000">
    <img src={img} className="d-block w-100" alt="..." />
    </div>
    </>
  )
}
