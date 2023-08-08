import React from 'react'

export default function FilterOption({onClickFunction, text}) {

    console.log(onClickFunction)
  return (
    <>

    <button className="btn btn-outline-dark m-1 btn-sm" onClick={onClickFunction}>{text}</button>

    </>
  )
}
