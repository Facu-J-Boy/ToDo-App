import React from 'react';
import {Routes, Route} from 'react-router-dom';
import LoginScreen from './LoginScreen/LoginScreen';
import User from './User/User';

const App: React.FC = ():JSX.Element => {
  return (
    <>
    <Routes>
      <Route path='/' element={<LoginScreen />} />
      <Route path='/user' element={<User />} />
     </Routes>
    </>
  )
}

export default App