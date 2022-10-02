import React,{useState, useEffect} from 'react'
import iphone from '../../../Images/iphone.jpg'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

interface propsitem {
  afor: string
  description: string
  gfor: string
  id: string
  name: string
  photos: string
  price: string
  types: string
}

const Detailed = () => {
  const location = useLocation();
  const loc = location.pathname
  const path=loc.split("/")[2];
  const [post,setpost] = useState<propsitem>();
  useEffect(() => {
    axios.get("https://blackneb.com/piyankiya/api/post" + `/read_single.php?id=${path}`).then((response) => {
      setpost(response.data);
      console.log(response.data);
      if(response.data.message === "no posts found"){
      }
    })
  }, []);
  if(!post) return null;
  return (
    <div>
      <div className='shadow border-b-2 border-gray-400 mx-4 md:mx-16 mt-8'>
          <h1 className='text-2xl'>{post.name}</h1>
        </div>
      <div className='flex justify-center items-center pt-8'>
        <div className='shadow rounded-md'>
          <img className='h-96 rounded-md' src={"https://blackneb.com/piyankiya/api/post/photos/" + post.photos} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Detailed
