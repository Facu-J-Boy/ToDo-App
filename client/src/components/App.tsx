import React from 'react';
import {Routes, Route} from 'react-router-dom';
import LoginScreen from './LoginScreen';
import User from './User';
import SignUpWithEmail from './SignUpWithEmail';
import LoginWithEmail from './LoginWithEmail';

const App: React.FC = ():JSX.Element => {
  return (
    <>
    <Routes>
      <Route path='/' element={<LoginWithEmail/>} />
      <Route path='/signup' element={<SignUpWithEmail />} />
      <Route path='/user' element={<User />} />
     </Routes>
    </>
  )
}

export default App;