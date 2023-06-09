import React from 'react';
import LogoSmall from './LogoSmall';
import LogOut from './LogOut';

const Nav: React.FC = (): JSX.Element => {

  return (
    <div className='flex flex-row relative p-5 border-b border-grey'>
        <div className='ml-10'>
          <LogoSmall />
        </div>
          <LogOut />
    </div>
  )
}

export default Nav