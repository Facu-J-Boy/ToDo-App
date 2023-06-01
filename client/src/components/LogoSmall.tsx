import React from 'react'

const LogoSmall = () => {
  return (
    <div className='flex justify-center'>
        <img className="w-24" src={process.env.REACT_APP_LOGO} />
    </div>
  )
}

export default LogoSmall