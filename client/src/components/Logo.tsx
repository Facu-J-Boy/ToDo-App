import React, {useEffect, useState} from 'react';
import { UserInterface, findOrCreateUser, userUndefined} from '../Redux/Actions';
import { auth } from '../Firebase';
import { StoreState } from '../Redux/Reducers';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface LogoProps {
  user: UserInterface | {};
  findOrCreateUser(dates: UserInterface): void;
  userUndefined(): void
}

const Logo: React.FC<LogoProps> = ({user, findOrCreateUser, userUndefined}): JSX.Element => {

  const navigate = useNavigate()

  const reedUser = () => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        findOrCreateUser({id: user.uid, email: user.email})
        navigate('/user');
    } else {
        navigate('/login');
    }
    })
  }

  useEffect(() => {
    setTimeout(reedUser, 3000);
  }, []);
  
  return (
    <div className='flex justify-center items-center h-screen'>
        <p className={`inline text-9xl text-end font-bold`}>ToD</p>
        <img className="w-32 h-32" src='https://res.cloudinary.com/dvqh0exq6/image/upload/v1684972785/ToDo/grid_landscape-removebg-preview_m5yhof.png' />
    </div>
  )
}

const mapDispatchToProps = {
  findOrCreateUser,
  userUndefined
}

const mapStateToProps = (state: StoreState): {user: UserInterface | {}} => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logo);