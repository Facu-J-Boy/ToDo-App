import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ToDoList from './ToDoList/ToDoList';
import LoginScreen from './LoginScreen/LoginScreen';

const App: React.FC = ():JSX.Element => {
  return (
    <>
    <Routes>
      <Route path='/' element={<LoginScreen />} />
      <Route path='/user' element={<ToDoList />} />
     </Routes>
    </>
  )
}

export default App