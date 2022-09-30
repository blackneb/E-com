import React from 'react'
import iphone from '../../Images/iphone.jpg'

const Carditems = () => {
  return (
    <div className='h-52 shadow md:h-48 md:shadow md:w-48 rounded-md m-2 p-2'>
      <div className='h-32 w-28 flex justify-center md:h-36 md:w-44'>
        <img className='h-32 md:mt-0' src={iphone} alt=''/>
      </div>
      <div>
        <button className='border-2 border-black rounded-2xl bg-white text-black px-2 hover:bg-black hover:text-white m-4 md:m-0'>Cart Item</button>
      </div>
    </div>
  )
}

export default Carditems
