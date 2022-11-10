import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import ChangePassword from './ChangePassword'
import {NOTIFICATION_TYPES} from '../../../Redux/ActionTypes';
import { notification } from '../../../Redux/Actions';
interface accounttoupdate{
    username:string;
    firstname:string;
    lastname:string;
    email:string;
    phone:string;
}
const UserProfile = () => {
  const {register, handleSubmit} = useForm<accounttoupdate>();
  const userinfo = useSelector((state:any) => state.user);
  const url=`http://localhost/blacknebecom/api/post/edit_account.php`;
  const onSubmit = handleSubmit((data) => {
    const submitteddata = {
      userid:userinfo.userid,
      username:data.username,
      firstname:data.firstname,
      lastname:data.lastname,
      email:data.email,
      phone:data.phone
    }
    const axiosjson = JSON.stringify(submitteddata,null,2);
    axios.post(url,axiosjson).then((response) => {
      console.log(response.data);
    });
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
                    <input className='px-2 mt-2 border-b-2' type="text" defaultValue={userinfo.firstname} {...register('firstname', {required: true})}/>
                </div>
                <div className='mt-2'>
                    <h3 className='text-left'>Last Name</h3>
                    <input className='px-2 mt-2 border-b-2' type="text" defaultValue={userinfo.lastname} {...register('lastname', {required: true})}/>
                </div>
                <div className='mt-2'>
                    <h3 className='text-left'>User Name</h3>
                    <input className='px-2 mt-2 border-b-2' type="text" defaultValue={userinfo.username} {...register('username', {required: true})}/>
                </div>
                <div className='mt-2'>
                    <h3 className='text-left'>E-mail</h3>
                    <input className='px-2 mt-2 border-b-2' type="email" defaultValue={userinfo.email} {...register('email', {required: true})}/>
                </div>
                <div className='mt-2'>
                    <h3 className='text-left'>Phone</h3>
                    <input className='px-2 mt-2 border-b-2' type="tel" defaultValue={userinfo.phone} {...register('phone', {required: true})}/>
                </div>
                <div>
                    <button className='my-8 border-2 px-2 rounded-md'>Update</button>
                </div>
            </div>
        </div>
    </form>
    <ChangePassword/>
    </div>
  )
}

export default UserProfile
