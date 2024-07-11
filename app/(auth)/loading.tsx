import React from 'react'

const Loading = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-b-4 border-t-4 border-blue-500"></div>
    </div>
  )
}

export default Loading
