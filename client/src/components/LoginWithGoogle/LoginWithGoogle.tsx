import React, { useEffect } from 'react';
import { auth, provider } from '../../Firebase';
import { signInWithRedirect, getRedirectResult, UserCredential } from 'firebase/auth';

const LoginWithGoogle = () => {

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
            const result: UserCredential | null = await getRedirectResult(auth);
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