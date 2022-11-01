import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

const CartCards = (props:any) => {
  const carteditems = useSelector((state:any) => state.addtocart.items);
  const [price, setprice] = useState(0);
  let prices:any = 0;
  const { register, handleSubmit, watch, formState: { errors } } = useForm<any>();
  const onSubmit=handleSubmit((data:any) => {
    
  });
  useEffect(() => {
    for(let i=0;i<carteditems.length;i++){
      let valueone = carteditems[i].price;
      let valuetwo = carteditems[i].quantity;
      prices += valueone * valuetwo;
    }
    setprice(prices);
  }, [])
  const onChange = (e:any) => {
    e.preventDefault();
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      {
        carteditems.map((items:any,index:number) => (
          <div className='w-96'>
            <div className='flex flex-row border-2 m-2 p-2'>
              <div className='w-14'>
                <img className='h-8' src={"http://localhost/blacknebecom/api/post/photos/" + items[0].images[0]} alt="" />
              </div>
              <p className='ml-2 w-48'>{items[0].name}</p>
              <p>{items[0].price + "ETB"}</p>
                <input className='w-20 h-8 ml-8 border-2' type="number" {...register(items[0].name)} defaultValue='1' placeholder='1'></input>
            </div>
          </div>
        ))
        }
        <p className='ml-2'>Total Price: {price}</p>
      </form>
    </div>
  )
}

export default CartCards
