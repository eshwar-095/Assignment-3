import React from 'react'
import error from "../../images/pnf.jpg"
import './PageNotFound.scss'
const PageNotFound = () => {
  return (
    <div className='error-image'>
        <img src={error} alt="error" />
      </div>
  )
}

export default PageNotFound