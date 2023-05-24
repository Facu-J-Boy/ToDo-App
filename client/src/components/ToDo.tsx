import React from 'react';

const ToDo = () => {
  return (
    <div className="bg-green block my-5 w-9/12 break-words">
        <div className="flex justify-end">
           <svg xmlns="http://www.w3.org/2000/svg" 
           fill="none" 
           viewBox="0 0 24 24" 
           strokeWidth={1.5} 
           stroke="currentColor" 
           className="w-10 h-10 stroke-white p-2 bg-greenHard cursor-pointer hover:bg-greenSoft">
             <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
           </svg>
           <svg xmlns="http://www.w3.org/2000/svg" 
           fill="none" 
           viewBox="0 0 24 24" 
           strokeWidth={1.5} 
           stroke="currentColor" 
           className="w-10 h-10 stroke-white p-2 bg-greenHard cursor-pointer hover:bg-greenSoft">
             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
           </svg>
        </div>
      <p className="text-left text-white  text-2xl p-5">
          aprender payton
      </p>
    </div>
  )
}

export default ToDo