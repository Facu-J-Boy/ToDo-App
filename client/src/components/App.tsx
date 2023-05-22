import React from 'react';
import LoginWithGoogle from './LoginWithGoogle/LoginWithGoogle';
import LoginWithEmail from './LoginWithEmail/LoginWithEmail';
import LogOut from './LogOut/LogOut';
import SignUpWithEmail from './SignUpWithEmail/SignUpWithEmail';
import ToDoList from './ToDoList/ToDoList';

const App: React.FC = ():JSX.Element => {
  return (
    <>
     <LoginWithEmail />
     <LoginWithGoogle />
     <LogOut />
     <SignUpWithEmail />
     <ToDoList />
    </>
  )
}

export default App