import React from 'react'
import PropTypes from 'prop-types';


export default function Input({type="text", placeholder,id}) {
  return (
    <>

            <div class="form-group pt-3">
                <input type={type} class="form-control" placeholder={placeholder} id={id} />
            </div>
    
    </>
  )
}

Input.propTypes = {
  
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.number
}
