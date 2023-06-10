import React, {useEffect, useState} from 'react';
import ToDo from './ToDo';
import { ToDoInterface, getToDos } from '../Redux/Actions';
import { StoreState } from '../Redux/Reducers';
import { connect } from 'react-redux';
import { auth } from '../Firebase';
import CreateToDoInput from './CreateToDoInput';
import ScrollTop from './ScrollTop';

interface ToDoListProps {
  todos: ToDoInterface[] | string,
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
        {Array.isArray(todos)? todos.map((el) => <ToDo 
        key={el.id} 
        userId={userId}
        id={el.id} 
        text={el.text} />)
      :
      <p className='mt-10 text-2xl font-sans font-bold text-grey'>
        {todos}
      </p>
        }
       </div>
       <ScrollTop />
    </>
  )
        }

const mapDispatchToProps = {
  getToDos,
}

const mapStateToProps = (state: StoreState): {todos: ToDoInterface[] | string } => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);