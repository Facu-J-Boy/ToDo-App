import React from 'react';
import ToDoList from './ToDoList';
import Nav from './Nav';

const User: React.FC = (): JSX.Element => {
  return (
    <div>
        <Nav />
        <ToDoList />
    </div>
  )
}

export default User