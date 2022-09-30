import React from 'react'

const Contact = () => {
  return (
    <div className='m-8 p-8 border-2 border-gray-200 md:mx-16 rounded-2xl flex flex-wrap flex-row justify-center'>
      <div>
        <div className='flex flex-wrap flex-row justify-center'>
          <div className='m-4'>
            <p className='text-left'>First name</p>
            <input className='border-2 rounded-lg h-10 md:w-72' type='text'></input>
          </div>
          <div className='m-4'>
            <p className='text-left'>Last name</p>
            <input className='border-2 rounded-lg h-10 md:w-72' type='text'></input>
          </div>
        </div>
        <div className='flex flex-wrap flex-row justify-center'>
          <div className='m-4'>
            <p className='text-left'>Phone Number</p>
            <input className='border-2 rounded-lg h-10 md:w-72' type='text'></input>
          </div>
          <div className='m-4'>
            <p className='text-left'>E-mail</p>
            <input className='border-2 rounded-lg h-10 md:w-72' type='text'></input>
          </div>
        </div>
        <div className='flex flex-wrap flex-row justify-center'>
          <div className='m-4 text-left'>
            <p className='text-left'>Message</p>
            <input className='border-2 rounded-lg h-10 md:w-72' type='text'></input>
          </div>
        </div>
        <button className='m-4 border-2 border-gray-500 rounded-lg px-4 py-2'>Send Message</button>
      </div>
      <div className='w-96'>
      </div>
    </div>
  )
}

export default Contact
