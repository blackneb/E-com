import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className='shadow border-b-2 border-gray-400 mx-4 md:mx-16 mt-8'>
          <h1>Contact Our Admins</h1>
        </div>
        <div className='m-8 p-8 shadow md:mx-16 rounded-2xl flex flex-wrap flex-row justify-start'>
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
          <div className='flex flex-wrap flex-row justify-start'>
            <div className='m-4 text-left'>
              <p className='text-left'>Message</p>
              <textarea className='border-2 rounded-lg h-28 md:w-72'/>
            </div>
          </div>
          <button className='m-4 border-2 border-gray-500 rounded-lg px-4 py-2'>Send Message</button>
        </div>
        <div className='w-96'>
        </div>
      </div>
    </div>
  )
}

export default Contact
