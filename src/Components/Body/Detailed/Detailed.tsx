import React from 'react'
import iphone from '../../../Images/iphone.jpg'

const Detailed = () => {
  return (
    <div>
      <div className='shadow border-b-2 border-gray-400 mx-4 md:mx-16 mt-8'>
          <h1>View Detail</h1>
        </div>
      <div className='flex justify-center items-center pt-8'>
        <div className='shadow rounded-md'>
          <img className='h-96 rounded-md' src={iphone} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Detailed
