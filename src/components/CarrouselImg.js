import React from 'react'
import PropTypes from 'prop-types';


export default function CarrouselImg({img}) {
  return (
    <>
    <div className="carousel-item" data-bs-interval="2000">
    <img src={img} className="d-block w-100" alt="..." />
    </div>
    </>
  )
}

CarrouselImg.propTypes = {
  
  img: PropTypes.string,
 
}

