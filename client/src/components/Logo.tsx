import React, {useEffect, useState} from 'react';
import { UserInterface, findOrCreateUser, userUndefined} from '../Redux/Actions';
import { auth } from '../Firebase';
import { StoreState } from '../Redux/Reducers';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
        <img className="w-50" src='https://res.cloudinary.com/dvqh0exq6/image/upload/v1685649063/ToDo/Captura_de_pantalla_2023-06-01_164509-removebg-preview_jikdtx.png' />
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