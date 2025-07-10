import React from 'react'
import { MoonLoader } from 'react-spinners';
import "./loading.css"

const Loading = () => {
  return (
    <div className='loading'>
        <MoonLoader />
        </div>
  )
}

export default Loading