import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { UserInterface, userUndefined } from '../Redux/Actions';
import { StoreState } from '../Redux/Reducers';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

interface LogOutProps {
  user: UserInterface | {};
  userUndefined(): void
}

const LogOut: React.FC<LogOutProps> = ({userUndefined, user}): JSX.Element => {

  const navigate = useNavigate();
  
    const handleLogout = async () => {
        try {
          const auth = getAuth();
          await signOut(auth);
          userUndefined();
          navigate('/')
          console.log('Cierre de sesión exitoso');
        } catch (error) {
          console.error('Error de cierre de sesión:', error);
        }
      };
    
      return (
        <button className='right-0 absolute mr-5 bg-lightGreen p-2 mb-2 rounded-sm text-white'
        onClick={handleLogout}>Log out</button>
      );
}

const mapDispatchToProps = {
  userUndefined,
}

const mapStateToProps = (state: StoreState): {user: UserInterface | {}} => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogOut)