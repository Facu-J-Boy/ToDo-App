import React, {useEffect} from 'react';
import LoginWithEmail from './LoginWithEmail';
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

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user? navigate('/') : null      
    });
  }, []);
  
  return (
    <div>
       <LoginWithEmail />        
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