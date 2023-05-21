import React, { useEffect } from 'react';
import { auth, provider } from '../../Firebase';
import { signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { JsxElement } from 'typescript';

const LoginWithGoogle = (): JSX.Element => {

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
      
    const handleSignInWithGoogle = async () => {
        try {
            await signInWithRedirect(auth, provider);
            await getRedirectResult(auth);
        } catch (error) {
            console.error(error);
        }
      };
    
      return (
        <div>
          <h1>Iniciar sesión</h1>
          <button onClick={handleSignInWithGoogle}>Iniciar sesión con Google</button>
        </div>
      );
}

export default LoginWithGoogle