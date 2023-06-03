import React, {useState, useEffect} from 'react';
import { auth } from '../Firebase';
import { NewToDo, ToDoInterface, getToDos, postToDo } from '../Redux/Actions';
import { StoreState } from '../Redux/Reducers';
import { connect } from 'react-redux';

interface CreateToDoInputProps {
  postToDo(dates: NewToDo): void
  getToDos(id: string): void
}

const CreateToDoInput: React.FC<CreateToDoInputProps> = ({postToDo, getToDos}): JSX.Element => {

  const [addToDo, setAddToDo] = useState({
      id: '',
      dates: {
        text: '',
        userId: ''      
    }
  });

  const [id, setId] = useState('');
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        setAddToDo({
        ...addToDo,
        id: user.uid,
        dates: {
          ...addToDo.dates,
          userId: user.uid
        } 
      })
      setId(user.uid)
    };
    })
  }, []);
  
  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    console.log(addToDo)
    console.log('value: ', ev.target.value)
    setAddToDo({
      ...addToDo,
      dates: {
        ...addToDo.dates,
        [ev.target.name]: ev.target.value
      }
    })
  }

  const create = async (event: { key: string; }) => {
    if (addToDo.dates.text.trim() === '') {
    return;
  }
    if (event.key === 'Enter') {
      await postToDo(addToDo);
      await getToDos(id);
      setAddToDo({
        ...addToDo,
        dates: {
          ...addToDo.dates,
          text: ''
        }
      });
    }
  }

  const createWithButton = async() => {
    if (addToDo.dates.text.trim() === '') {
      return;
    }
    await postToDo(addToDo);
    await getToDos(id);
    setAddToDo({
      ...addToDo,
      dates: {
        ...addToDo.dates,
        text: ''
      }
    });
  }

  return (
    <div className='flex mt-5'>
        <input 
        type='text' 
        name='text'
        value={addToDo.dates.text}
        onInput={handleInputChange}
        onKeyDown={create}
        className="rounded-l-md border-t border-b border-l text-gray-800 py-2 px-4 focus:outline-none focus:border-blue-500" 
        placeholder='Add to the list'
        />
        <button 
        onClick={createWithButton}
        className="bg-lightGreen hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-md focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
    </div>
  )
}

const mapDispatchToProps = {
  getToDos,
  postToDo
};

const mapStateToProps = (state: StoreState) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateToDoInput);