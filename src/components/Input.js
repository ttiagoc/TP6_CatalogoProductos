import React from 'react'

export default function Input({type="text", placeholder,id}) {
  return (
    <>

            <div class="form-group pt-3">
                <input type={type} class="form-control" placeholder={placeholder} id={id} />
            </div>
    
    </>
  )
}
