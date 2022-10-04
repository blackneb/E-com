import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <form>
        <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col border-2 rounded-xl w-96 mt-8 text-gray-700'>
                <h1 className='border-b-2 mx-40'>Log in</h1>
                <div className='mt-4'>
                    <h3 className='text-left'>First Name</h3>
                    <input className='mt-2 border-b-2' type="text"/>
                </div>
                <div className='mt-2'>
                    <h3 className='text-left'>Last Name</h3>
                    <input className='mt-2 border-b-2' type="text"/>
                </div>
                <div className='mt-2'>
                    <h3 className='text-left'>E-mail</h3>
                    <input className='mt-2 border-b-2' type="text"/>
                </div>
                <div className='mt-2'>
                    <h3 className='text-left'>Phone</h3>
                    <input className='mt-2 border-b-2' type="text"/>
                </div>
                <div className='mt-2'>
                    <h3 className='text-left'>Password</h3>
                    <input className='mt-2 border-b-2' type="text"/>
                </div>
                <div className='mt-2'>
                    <h3 className='text-left'>Confirm Password</h3>
                    <input className='mt-2 border-b-2' type="text"/>
                </div>
                <div>
                    <button className='my-8 border-2 px-2 rounded-md'>Create Account</button>
                </div>
            </div>
        </div>
    </form>
  )
}

export default Signup
