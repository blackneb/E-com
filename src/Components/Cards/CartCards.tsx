import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addquantity, removeitem } from '../../Redux/Actions';
import close from '../../Icons/close.png';


const CartCards = (props:any) => {
  const carteditems = useSelector((state:any) => state.addtocart.items);
  const dispatch = useDispatch();
  const [price, setprice] = useState(0);
  let prices:any = 0;
  const { register, handleSubmit, watch, formState: { errors } } = useForm<any>();
  const onSubmit=handleSubmit((data:any) => {
    
  });
  function calculateitem(){
    prices = 0;
    for(let i=0;i<carteditems.length;i++){
      if(carteditems[i].quantity <= 0){
        alert("There is item With Value Zero");
        return;
      }
    }
    for(let i=0;i<carteditems.length;i++){
      let valueone = carteditems[i].price;
      let valuetwo = carteditems[i].quantity;
      prices += valueone * valuetwo;
    }
    setprice(prices);
  }
  useEffect(() => {
    calculateitem();
  }, [])
  const deletefromcart = (target:any) => {
    dispatch(removeitem(target));
  }
  const onChange = (e:any) => {
    e.preventDefault();
    const onchanging = {
      id:e.target.name,
      value:e.target.value,
    }
    dispatch(addquantity(onchanging));
    if(e.target.value > 0){
      //calculateitem();
    }
    else{
      console.log("negative value");
    }
  }
  
  return (
    <div className=' w-[32rem] h-96'>
      <form onSubmit={handleSubmit(onSubmit)}>
      {
        carteditems.map((items:any,index:number) => (
          <div className=''>
            <div className='flex flex-row border-b-2 m-2 p-2'>
              <div className='w-14'>
                <img className='h-8' src={"http://localhost/blacknebecom/api/post/photos/" + items.images} alt="" />
              </div>
              <p className='ml-8 w-64 text-left'>{items.name}</p>
              <p className='text-center'>{items.price + "ETB"}</p>
                <input className='w-20 h-8 ml-8 border-2' type="number" name={items.id} onChange={onChange} defaultValue={items.quantity}placeholder='1'></input>
                <div onClick={()=>{deletefromcart(items.id)}} >
                  <img  className='h-3 ml-4 mt-2'  src={close} alt=''/>
                </div>
            </div>
          </div>
        ))
        }
        <p className='ml-2'>Total Price: {price}</p>
        <button onClick={calculateitem} >Refresh</button>
      </form>
    </div>
  )
}

export default CartCards
