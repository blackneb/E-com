import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'

const CartCards = (props:any) => {
  const carteditems = useSelector((state:any) => state.addtocart.items);
  
  return (
    <div>
      {
        carteditems.map((items:any) => (
            <div>
              <p>{items[0].name}</p>
            </div>
        ))
        }
    </div>
  )
}

export default CartCards
