import React, { useEffect } from 'react';
import { auth, provider } from '../../Firebase';
import { signInWithRedirect, getRedirectResult } from 'firebase/auth';

const LoginWithGoogle: React.FC = (): JSX.Element => {

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
          <button className="border-solid-black bg-white text-black font-bold py-2 px-4 rounded flex items-center" 
          onClick={handleSignInWithGoogle}>
                <img className='w-7 h-7' src='https://res.cloudinary.com/dvqh0exq6/image/upload/v1684869793/ToDo/Google_Icons-09-512_igqobv.png' />
                Iniciar sesión con Google
          </button>
        </div>
      );
}

export default LoginWithGoogle