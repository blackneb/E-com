import React from 'react'
import iphone from '../../Images/iphone.jpg'

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

const Carditems = (props: propsitem) => {
  const {afor, description, gfor, id, name, photos, price, types} = props;
  console.log(name);
  return (
    <div className='h-52 hover:border-2 hover:border-gray-400 shadow md:h-48 md:shadow md:w-48 rounded-md m-2 p-2'>
      <div className='h-32 w-28 flex justify-center md:h-36 md:w-44'>
        <img className='h-32 md:mt-0 rounded-md' src={"https://blackneb.com/piyankiya/api/post/photos/" + photos} alt=''/>
      </div>
      <div>
        <button className='border-2 border-black rounded-2xl bg-white text-black px-2 hover:bg-black hover:text-white m-4 md:m-0'>Cart Item</button>
      </div>
    </div>
  )
}

export default Carditems
