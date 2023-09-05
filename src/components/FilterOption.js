import React from 'react'
import PropTypes from 'prop-types';

export default function FilterOption({onClickFunction, text}) {

  
  return (
    <>

    <button className="btn btn-outline-dark m-1 btn-sm" onClick={onClickFunction}>{text}</button>

    </>
  )
}


FilterOption.propTypes = {
  
  text: PropTypes.string,
  onClickFunction: PropTypes.func,
}

