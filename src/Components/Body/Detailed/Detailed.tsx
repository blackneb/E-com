import React,{useState, useEffect} from 'react'
import iphone from '../../../Images/iphone.jpg'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import ione from '../../../Images/imageone.webp'
import itwo from '../../../Images/imagetwo.webp'
import ithree from '../../../Images/imagethree.webp'
import ifour from '../../../Images/imagefour.webp'
import ifive from '../../../Images/imagefive.webp'
import isix from '../../../Images/imagesix.webp'


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
  const [imageshown, setimageshown] = useState(ione);
  const location = useLocation();
  const loc = location.pathname;
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
        <div className='flex flex-row'>
          <div className='flex flex-row mt-4'>
            <div className='hover:border-b-2 mx-4' onClick={()=> setimageshown(ione)}>
              <img className='h-20 rounded-md p-2' src={ione} alt=''/>
            </div>
            <div className='hover:border-b-2 mx-4' onClick={()=> setimageshown(itwo)}>
              <img className='h-20 rounded-md p-2' src={itwo} alt=''/>
            </div>
            <div className='hover:border-b-2 mx-4' onClick={()=> setimageshown(ithree)}>
              <img className='h-20 rounded-md p-2' src={ithree} alt=''/>
            </div>
            <div className='hover:border-b-2 mx-4' onClick={()=> setimageshown(ifour)}>
              <img className='h-20 rounded-md p-2' src={ifour} alt=''/>
            </div>
            <div className='hover:border-b-2 mx-4' onClick={()=> setimageshown(ifive)}>
              <img className='h-20 rounded-md p-2' src={ifive} alt=''/>
            </div>
            <div className='hover:border-b-2 mx-4' onClick={()=> setimageshown(isix)}>
              <img className='h-20 rounded-md p-2' src={isix} alt=''/>
            </div>
          </div>
        </div>
      <div className='flex justify-center pt-8'>
        <div className='shadow rounded-md'>
          <img className='h-96 rounded-md' src={imageshown} alt=''/>
        </div>
        <div className='ml-8'>
          <h1>Laptop Specs</h1>
        </div>
      </div>
    </div>
  )
}

export default Detailed
