import React, {useEffect} from 'react';
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

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user? getToDos(user.uid) : null;
    })
  }, [])
  
  return (
    <>
    <div className='flex justify-center'>
       <CreateToDoInput />
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