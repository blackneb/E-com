import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
interface loginprofile {
    username:string;
    password:string;
}

const Signin = () => {
    const {register, handleSubmit} = useForm<loginprofile>();
    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data))
    })
  return (
    <form onSubmit={onSubmit}>
        <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col border-2 rounded-xl h-80 w-96 mt-8'>
                <h1 className='border-b-2 mx-40'>Log in</h1>
                <div className='mt-4'>
                    <h3 className='text-left'>User name</h3>
                    <input className='px-2 mt-2 border-b-2' type="text" {...register('username', {required: true})}/>
                </div>
                <div className='mt-4'>
                    <h3 className='text-left'>Password</h3>
                    <input className='px-2 mt-2 border-b-2' type="password" {...register('password',{required: true})}/>
                </div>
                <div>
                    <button type='submit' className='mt-2 border-2 px-2 rounded-md'>Login</button>
                </div>
                <div className='border-b-2 m-2'></div>
                <div>
                    <Link to="/signup">
                        <p>Don't have an account?</p>
                    </Link>
                    <p>forget password!</p>
                </div>
            </div>
        </div>
    </form>
  )
}

export default Signin
