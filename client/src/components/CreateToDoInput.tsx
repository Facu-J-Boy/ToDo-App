import React, {useState, useEffect} from 'react';
import { auth } from '../Firebase';

const CreateToDoInput: React.FC = (): JSX.Element => {

  const [addToDo, setAddToDo] = useState({
      id: '',
      dates: {
        text: '',
        userId: ''      
    }
  });

  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user? setAddToDo({
        ...addToDo,
        id: user.uid,
        dates: {
          ...addToDo.dates,
          userId: user.uid
        } 
      }) : null;
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
    </div>
  )
}

export default CreateToDoInput