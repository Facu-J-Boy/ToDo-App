import React, {useEffect} from 'react';
import ToDo from './ToDo';
import { ToDoInterface, UserInterface, getToDos } from '../Redux/Actions';
import { StoreState } from '../Redux/Reducers';
import { connect } from 'react-redux';
import { auth } from '../Firebase';

interface ToDoListProps {
  todos: ToDoInterface[] | [],
  getToDos(id: string): void
}

const ToDoList: React.FC<ToDoListProps> = ({todos, getToDos}): JSX.Element => {

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user? getToDos(user.uid) : null;
    })
  }, [])
  
  return (
    <>
    <div className='flex justify-center'>
       <svg 
       xmlns="http://www.w3.org/2000/svg" 
       fill="none" 
       viewBox="0 0 24 24" 
       strokeWidth={1} 
       stroke="currentColor" 
       className="w-16 h-16 cursor-pointer">
         <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
       </svg>
    </div>
       <div className="flex flex-col items-center">
        {todos.map((el) => <ToDo key={el.id} text={el.text} />)}
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