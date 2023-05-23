import React from 'react';
import LogoSmall from '../LogoSmall/LogoSmall';

const Nav = () => {
  return (
    <div className='flex flex-row relative p-5 border-b-2 border-grey'>
        <div className='ml-10'>
          <LogoSmall />
        </div>
          <button className='right-0 absolute mr-5 bg-green p-2 mb-2 rounded-sm text-white'> Log out </button>
    </div>
  )
}

export default Nav