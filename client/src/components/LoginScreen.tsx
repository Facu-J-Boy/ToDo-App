import React, {useEffect} from 'react';
import LoginWithEmail from './LoginWithEmail';
import Logo from './Logo';
import { auth } from '../Firebase';
import { UserInterface, getUser } from '../Redux/Actions';
import { connect, useSelector } from 'react-redux';
import { StoreState } from '../Redux/Reducers';
import { useNavigate } from 'react-router-dom';

interface LoginScreenProps {
  user: UserInterface | {};
  getUser(id: string): void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({getUser, user}): JSX.Element => {

  const navigate = useNavigate()

  const redirectToUser = () => {
    navigate('/user');
  }

  const redirectToLoginScreen = () => {
    navigate('/');
  }

  console.log('Estado global de user: ', user)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        authenticated = true;
        getUser(user.uid);
      } else {
        console.log('Usuario no autenticado');
        redirectToLoginScreen();
        // authenticated = false;
      }
    });
  }, []);
  
  useEffect(() => {
    if(user) {
      redirectToUser()
    }
    // !user? authenticated = false : authenticated = true 
  })
  
  let authenticated: boolean = false
  
  return (
    <div>
      {!authenticated && !user? <LoginWithEmail /> : <Logo />}        
    </div>
  )
}

const mapDispatchToProps = {
  getUser,
}

const mapStateToProps = (state: StoreState): {user: UserInterface | {}} => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);