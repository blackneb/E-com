import React from 'react'
import { useForm } from 'react-hook-form'
import { signupproperties } from './Signup'

const UserProfile = () => {
  const {register, handleSubmit} = useForm<signupproperties>();
  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data,null,2));
  })
  return (
    <div>
      <div className='shadow border-b-2 border-gray-400 mx-4 md:mx-16 mt-8'>
          <h1>Manage your Account</h1>
        </div>
      <form onSubmit={onSubmit}>
        <div className='flex justify-center items-center'>
            <div className='flex shadow justify-center items-center flex-col border-0 rounded-xl w-96 mt-8 text-gray-700'>
                <h1 className='border-b-2 mx-40 mt-4'>Sign Up</h1>
                <div className='mt-4'>
                    <h3 className='text-left'>First Name</h3>
                    <input className='px-2 mt-2 border-b-2' type="text" {...register('firstname', {required: true})}/>
                </div>
                <div className='mt-2'>
                    <h3 className='text-left'>Last Name</h3>
                    <input className='px-2 mt-2 border-b-2' type="text" {...register('lastname', {required: true})}/>
                </div>
                <div className='mt-2'>
                    <h3 className='text-left'>User Name</h3>
                    <input className='px-2 mt-2 border-b-2' type="text" {...register('username', {required: true})}/>
                </div>
                <div className='mt-2'>
                    <h3 className='text-left'>E-mail</h3>
                    <input className='px-2 mt-2 border-b-2' type="email" {...register('email', {required: true})}/>
                </div>
                <div className='mt-2'>
                    <h3 className='text-left'>Phone</h3>
                    <input className='px-2 mt-2 border-b-2' type="tel" {...register('phone', {required: true})}/>
                </div>
                <div className='mt-2'>
                    <h3 className='text-left'>Password</h3>
                    <input className='px-2 mt-2 border-b-2' type="password" {...register('password', {required: true})}/>
                </div>
                <div className='mt-2'>
                    <h3 className='text-left'>Confirm Password</h3>
                    <input className='px-2 mt-2 border-b-2' type="password" {...register('conpassword', {required: true})}/>
                </div>
                <div>
                    <button className='my-8 border-2 px-2 rounded-md'>Create Account</button>
                </div>
            </div>
        </div>
    </form>
    </div>
  )
}

export default UserProfile
