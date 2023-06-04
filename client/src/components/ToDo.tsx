import React from 'react';
import { deleteToDo, getToDos, updateToDo } from '../Redux/Actions/index';
import { StoreState } from '../Redux/Reducers';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

interface ToDoProps {
  userId: string
  id: string
  text: string
  deleteToDo (id: string): void
  getToDos (id: string): void
  updateToDo (id: string, text: {text: string}): void
}

const ToDo: React.FC<ToDoProps> = ({userId, id, text, deleteToDo, getToDos, updateToDo}): JSX.Element => {

  const update = async (date:string) => {
    try {
      await updateToDo(id, {text: date});
      await getToDos(userId);
    } catch (error) {
      console.error('Error: ', error)
    }
  };

  const openSweetAlert = () => {
    Swal.fire({
      title: 'Edit',
      input: 'text',
      inputPlaceholder: 'Update text',
      inputValue: text,
      showCancelButton: true,
      confirmButtonText: 'Accept',
      cancelButtonText: 'Cancel',
      inputValidator: (value) => {
        if (!value) {
          return 'Please enter a value';
        }
        return null;
      },
      customClass: {
        confirmButton: 'bg-lightGreen',
      }, 
    }).then((result) => {
      if (result.isConfirmed) {
        const enteredValue = result.value;
        update(enteredValue);
      }
    });
  };

  const check = async () => {
    await deleteToDo(id);
    await getToDos(userId);
  };

  return (
    <div className="bg-green block my-5 w-9/12 break-words">
        <div className="flex justify-end">
          <button onClick={openSweetAlert}>
              <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-10 h-10 stroke-white p-2 bg-lightGreen cursor-pointer hover:bg-greenHard">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>
           </button>
           <button onClick={check}>
              <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-10 h-10 stroke-white p-2 bg-lightGreen cursor-pointer hover:bg-greenHard">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
           </button>
        </div>
      <p className="text-left text-white text-2xl p-5">
          {text}
      </p>
    </div>
  )
}

const mapDispatchToProps = {
  getToDos,
  deleteToDo,
  updateToDo
};

const mapStateToProps = (state: StoreState) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
