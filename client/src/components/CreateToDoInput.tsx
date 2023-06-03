import React, {useState, useEffect} from 'react';
import { auth } from '../Firebase';
import { NewToDo, ToDoInterface, getToDos, postToDo } from '../Redux/Actions';
import { StoreState } from '../Redux/Reducers';
import { connect } from 'react-redux';

interface CreateToDoInputProps {
  todos: ToDoInterface[];
  postToDo(dates: NewToDo): void
  getToDos(id: string): void
}

const CreateToDoInput: React.FC<CreateToDoInputProps> = ({todos, postToDo, getToDos}): JSX.Element => {

  const [addToDo, setAddToDo] = useState({
      id: '',
      dates: {
        text: '',
        userId: ''      
    }
  });

  const [id, setId] = useState('')

  
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

  const create = () => {
      postToDo(addToDo);
      getToDos(id);
      getToDos(id);
      getToDos(id);
  }

  return (
    <div>
        <input 
        type='text' 
        name='text'
        value={addToDo.dates.text}
        onInput={handleInputChange}
        className="block w-full mt-5 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
        placeholder='Add to the list'
        />
        <button onClick={create}>Create</button>
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