import React, {useEffect, useState} from 'react';
import ToDo from './ToDo';
import { ToDoInterface, UserInterface, getToDos } from '../Redux/Actions';
import { StoreState } from '../Redux/Reducers';
import { connect } from 'react-redux';
import { auth } from '../Firebase';
import CreateToDoInput from './CreateToDoInput';

interface ToDoListProps {
  todos: ToDoInterface[] | [],
  getToDos(id: string): void
}

const ToDoList: React.FC<ToDoListProps> = ({todos, getToDos}): JSX.Element => {

  const [userId, setUserId] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        getToDos(user.uid);
        setUserId(user.uid);
      };
    })
  }, [])
  
  return (
    <>
    <div className='flex justify-center'>
       <CreateToDoInput />
    </div>
       <div className="flex flex-col items-center">
        {todos?.map((el) => <ToDo 
        key={el.id} 
        userId={userId}
        id={el.id} 
        text={el.text} />)}
       </div>
    </>
  )
}

const mapDispatchToProps = {
  getToDos,
}

const mapStateToProps = (state: StoreState): {todos: ToDoInterface[] | [] } => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);