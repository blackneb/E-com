import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

interface passwordhandler {
    oldpassword:string;
    newpassword:string;
    connewpassword:string;
}

const ChangePassword = () => {
    const {register, handleSubmit} = useForm<passwordhandler>();
    const userinfo = useSelector((state:any) => state.user);
    const onSubmit = handleSubmit((data) => {
        if(data.newpassword !== data.connewpassword){
            alert("Password update Falied");
        }
        else{
            alert(JSON.stringify(data,null,2));
        }
    })
  return (
    <div>
        <div className='shadow border-b-2 border-gray-400 mx-4 md:mx-16 mt-8'>
          <h1>Change Password</h1>
        </div>
        <form onSubmit={onSubmit}>
        <div className='flex justify-center items-center'>
            <div className='flex shadow justify-center items-center flex-col border-0 rounded-xl w-96 mt-8 text-gray-700'>
                <div className='mt-4'>
                    <h3 className='text-left'>Old Password</h3>
                    <input className='px-2 mt-2 border-b-2' type="password"{...register('oldpassword', {required: true})}/>
                </div>
                <div className='mt-2'>
                    <h3 className='text-left'>New Password</h3>
                    <input className='px-2 mt-2 border-b-2' type="password" defaultValue={userinfo.lastname} {...register('newpassword', {required: true})}/>
                </div>
                <div className='mt-2'>
                    <h3 className='text-left'>Confirm New Password</h3>
                    <input className='px-2 mt-2 border-b-2' type="password" defaultValue={userinfo.username} {...register('connewpassword', {required: true})}/>
                </div>
                <div>
                    <button className='my-8 border-2 px-2 rounded-md'>Update</button>
                </div>
            </div>
        </div>
    </form>
    </div>
  )
}

export default ChangePassword
