import React from 'react'
import logo from '../../../Icons/Logo.jpg'
import { useForm } from 'react-hook-form'

interface contactform {
  firstname:string;
  lastname:string;
  phonenumber:string;
  email:string;
  message:string;
}

const Contact = () => {
  const {register, handleSubmit} = useForm<contactform>();
  const formData = new FormData();
  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data,null,2));
  })
  return (
    <div>
        <div className='shadow border-b-2 border-gray-400 mx-4 md:mx-16 mt-8'>
          <h1>Contact Our Admins</h1>
        </div>
        <div className='m-8 p-8 shadow md:mx-16 rounded-2xl flex flex-wrap flex-row justify-around'>
          <form onSubmit={onSubmit}>
            <div>
            <div className='flex flex-wrap flex-row justify-center'>
              <div className='m-4'>
                <p className='text-left'>First name</p>
                <input className='border-2 rounded-lg h-10 md:w-72' type='text' { ...register('firstname',{required:true})}></input>
              </div>
              <div className='m-4'>
                <p className='text-left'>Last name</p>
                <input className='border-2 rounded-lg h-10 md:w-72' type='text' { ...register('lastname', {required: true})} ></input>
              </div>
            </div>
            <div className='flex flex-wrap flex-row justify-center'>
              <div className='m-4'>
                <p className='text-left'>Phone Number</p>
                <input className='border-2 rounded-lg h-10 md:w-72' type='tel' {...register('phonenumber', {required:true})} ></input>
              </div>
              <div className='m-4'>
                <p className='text-left'>E-mail</p>
                <input className='border-2 rounded-lg h-10 md:w-72' type='email'{...register('email', {required: true})}></input>
              </div>
            </div>
            <div className='flex flex-wrap flex-row justify-start'>
              <div className='m-4 text-left'>
                <p className='text-left'>Message</p>
                <textarea className='border-2 rounded-lg h-28 md:w-72' {...register('message', {required:true})}/>
              </div>
            </div>
            <button className='border-2 shadow border-gray-200 rounded-md bg-white text-black px-2 py-4 hover:bg-gray-200 hover:text-black m-4 md:m-0'>Send Message</button>
          </div>
          </form>
          <div className='w-96 flex justify-center items-center'>
            <img className='' src={logo} alt='' />
          </div>
      </div>
    </div>
  )
}

export default Contact
