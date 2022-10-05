import React,{useState} from 'react'
import UploadLaptop from '../Upload pages/UploadLaptop'
import UploadPhone from '../Upload pages/UploadPhone'
import UploadTv from '../Upload pages/UploadTv'
import UploadAccessories from '../Upload pages/UploadAccessories'
const Management = () => {
    const [currentcomponent, setcurrentcomponent] = useState<any>(<UploadLaptop/>)
    const components:{name:string,component:any}[] = [
        {name:"Laptops",component:<UploadLaptop/>},
        {name:"Phones",component:<UploadPhone/>},
        {name:"Tv",component:<UploadTv/>},
        {name:"Accessories",component:<UploadAccessories/>},
    ]
  return (
    <div>
        <div className='mx-96 mt-4'>
            <ul className='flex flex-row justify-between'>
                {
                    components.map((items) => (
                        <li className='hover:border-b-4'>
                            <p onClick={()=> setcurrentcomponent(items.component)}>{items.name}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div>
            {currentcomponent}
        </div>
    </div>
  )
}

export default Management
