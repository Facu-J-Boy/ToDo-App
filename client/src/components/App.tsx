import React from 'react';
import {Routes, Route} from 'react-router-dom';
import LoginScreen from './LoginScreen';
import User from './User';
import SignUpWithEmail from './SignUpWithEmail';
import Logo from './Logo';

const App: React.FC = ():JSX.Element => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Logo/>} />
      <Route path='/login' element ={<LoginScreen />} />
      <Route path='/signup' element={<SignUpWithEmail />} />
      <Route path='/user' element={<User />} />
     </Routes>
    </>
  )
}

export default App;