import React, {useEffect} from 'react';
import LoginWithEmail from './LoginWithEmail';
import Logo from './Logo';
import { auth } from '../Firebase';
import { useDispatch } from 'react-redux';

const LoginScreen = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      user?
      console.log('Usuario autenticado:', user)

      :
      console.log('Usuario no autenticado');
    }
    );
    return () => unsubscribe();
  }, []);
  
  return (
    <div>
        <LoginWithEmail />
        <Logo />
    </div>
  )
}

export default LoginScreen