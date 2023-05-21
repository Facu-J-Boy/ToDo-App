import React from 'react';
import LoginWithGoogle from './LoginWithGoogle/LoginWithGoogle';
import LoginWithEmail from './LoginWithEmail/LoginWithEmail';

const App = ():JSX.Element => {
  return (
    <>
     <LoginWithEmail />
     <LoginWithGoogle />
    </>
  )
}

export default App