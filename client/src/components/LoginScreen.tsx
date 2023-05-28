import React, {useEffect} from 'react';
import LoginWithEmail from './LoginWithEmail';
import Logo from './Logo';
import { auth } from '../Firebase';
import { UserInterface, getUser } from '../Redux/Actions';
import { connect } from 'react-redux';
import { StoreState } from '../Redux/Reducers';

interface LoginScreenProps {
  user: UserInterface | {};
  getUser(id: string): void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({getUser}): JSX.Element => {

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        getUser(user.uid);
      } else {
        console.log('Usuario no autenticado');
      }
    });
  }, []);
  
  return (
    <div>
        <LoginWithEmail />
        <Logo />
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