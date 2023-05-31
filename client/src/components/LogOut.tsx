import React, {useEffect, useState} from 'react';
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

  const [globalUser, setGlobalUser] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    !user? setGlobalUser(false) : setGlobalUser(true)
  })

  useEffect(() => {
    !globalUser? navigate('/') : null
  }, [globalUser])

    const handleLogout = async () => {
        try {
          const auth = getAuth();
          await signOut(auth);
          userUndefined()
          // Cierre de sesión exitoso
          console.log('Cierre de sesión exitoso');
          // Realiza las acciones correspondientes al cierre de sesión exitoso
        } catch (error) {
          // Ocurrió un error durante el cierre de sesión
          console.error('Error de cierre de sesión:', error);
          // Realiza las acciones correspondientes al error de cierre de sesión
        }
      };
    
      return (
        <button className='right-0 absolute mr-5 bg-green p-2 mb-2 rounded-sm text-white'
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