import React from 'react'

const CreateToDoInput: React.FC = (): JSX.Element => {
  return (
    <div>
        <input 
        type='text' 
        className="block w-full mt-5 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
        placeholder='Add to the list'
        />
    </div>
  )
}

export default CreateToDoInput