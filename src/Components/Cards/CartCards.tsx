import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';

const CartCards = (props:any) => {
  const carteditems = useSelector((state:any) => state.addtocart.items);
  const [price, setprice] = useState();
  
  return (
    <div>
      {
        carteditems.map((items:any) => (
          <div className='w-96'>
            <div className='flex flex-row border-2 m-2 p-2'>
              <div className='w-14'>
                <img className='h-8' src={"http://localhost/blacknebecom/api/post/photos/" + items[0].images[0]} alt="" />
              </div>
              <p className='ml-2 w-48'>{items[0].name}</p>
                <input className='w-20 ml-8 border-2' type="number" defaultValue='1' placeholder='1'></input>

            </div>
          </div>     
        ))
        }
        <p className='ml-2'>Total Price: </p>
    </div>
  )
}

export default CartCards
