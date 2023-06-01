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
        <img className="w-50" src={process.env.REACT_APP_LOGO} />
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