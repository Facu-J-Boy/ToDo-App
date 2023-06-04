import React from 'react';
import { auth, provider } from '../Firebase';
import { signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const LoginWithGoogle: React.FC = (): JSX.Element => {

  const navigate = useNavigate();
      
    const handleSignInWithGoogle = async () => {
      try {
            navigate('/');
            await signInWithRedirect(auth, provider);
            await getRedirectResult(auth);
        } catch (error) {
            console.error(error);
        }
      };
    
      return (
        <div>
          <button className="border-solid border border-greySoft bg-white text-black hover:bg-black hover:text-white hover:border font-medium py-2 px-4 rounded-full flex items-center" 
          onClick={handleSignInWithGoogle}>
                <img className='w-7 h-7' src='https://res.cloudinary.com/dvqh0exq6/image/upload/v1684869793/ToDo/Google_Icons-09-512_igqobv.png' />
                Sign In with Google
          </button>
        </div>
      );
}

export default LoginWithGoogle