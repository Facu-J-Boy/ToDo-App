import React, {useEffect} from 'react';
import LoginWithEmail from './LoginWithEmail';
import Logo from './Logo';
import { auth } from '../Firebase';
import { UserInterface, findOrCreateUser } from '../Redux/Actions';
import { connect } from 'react-redux';
import { StoreState } from '../Redux/Reducers';
import { useNavigate } from 'react-router-dom';

interface LoginScreenProps {
  user: UserInterface | {};
  findOrCreateUser(dates: UserInterface): void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({findOrCreateUser, user}): JSX.Element => {

  const navigate = useNavigate()

  const redirectToUser = () => {
    navigate('/user');
  }

  // const redirectToLoginScreen = () => {
  //   navigate('/');
  // }

  console.log('Estado global de user: ', user)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('Usuario autenticado: ', user)
        findOrCreateUser({id: user.uid, email: user.email});
      } else {
        console.log('Usuario no autenticado');
        // redirectToLoginScreen();
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
  
  return (
    <div>
       <LoginWithEmail />
       <Logo />        
    </div>
  )
}

const mapDispatchToProps = {
  findOrCreateUser,
}

const mapStateToProps = (state: StoreState): {user: UserInterface | {}} => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);