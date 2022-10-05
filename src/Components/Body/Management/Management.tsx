import React,{useState} from 'react'

const Management = () => {
    const [currentcomponent, setcurrentcomponent] = useState<string>()
    const components:{name:string,component:string}[] = [
        {name:"Laptops",component:""},
        {name:"Phones",component:""},
        {name:"Tv",component:""},
        {name:"Accessories",component:""},
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
    </div>
  )
}

export default Management
