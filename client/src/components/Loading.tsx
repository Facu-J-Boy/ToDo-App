import React from 'react'

const Loading: React.FC = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-10 h-10 border-t-2 border-b-2 rounded-full animate-spin"></div>
    </div>
  )
}

export default Loading