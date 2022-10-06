import React,{useState, useEffect} from 'react';
import Carditems from '../../Cards/Carditems';
import { useDispatch } from 'react-redux';
import Menu from '../../../Icons/menu.png';
import close from '../../../Icons/close.png';
import Contact from '../Contact/Contact';
import axios from 'axios';
import {Iuserautorization} from '../../../Models/Models'

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
const Home = () => {
  const [open, setOpen]= useState(false);
  const [post,setpost] = useState<any[]>([]);
  const dispatch = useDispatch();

  useEffect(()=>{
    axios.get("http://blackneb.com/piyankiya/api/post/read.php").then((response) => {
      setpost(response.data.data);
      console.log(response.data.data);
    });
  },[]);
  if(!post) return null;
  return (
    <div className=''>
        <div className='shadow border-b-2 border-gray-400 mx-4 md:mx-16 mt-8'>
          <h1>Shop every item You want</h1>
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-col'>
            <div onClick={()=>setOpen(!open)} className='mx-2 md:hidden w-6 mb-2'>
              {open? <img  className='h-4 mt-2 ml-2'  src={close}/> : <img className='h-4 mt-2 ml-2' src={Menu}/>}
            </div>
            <div className={`${open? "block" : "hidden"} md:block md:mt-4 w-40 shadow mx-2 rounded-md border-2 md:ml-16`}>
              <h2 className='border-b-2 border-gray-400'>Filter</h2>
            <div className={`flex justify-start overflow-x-scroll h-96`}>
              <ul className='flex flex-col m-4 '>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>PC</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Laptops</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Phones</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Joysticks</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Tv</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Charger</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>USB Cables</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>PlayStations</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Power Bank</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Hard Disk</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Smartwatch</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>X-Box</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Drones</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Speakers</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Cameras</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>VR</button></li>
              </ul>
            </div>
          </div>
          </div>
          <div className='flex justify-around flex-wrap overflow-y-scroll h-[28rem] pr-8 mt-2'>
            {
              [...post].map(({afor, description, gfor, id, name, photos, price, types}:propsitem) => (
                <Carditems key={id} afor={afor} description={description} gfor={gfor} id={id} name={name} photos={photos} price={price} types={types}/>
                ))
            }
          </div>
        </div>
        <div className='shadow border-b-2 border-gray-400 mx-4 md:mx-16 mt-8'>
          <h1>Shop By Class</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-around p-4 mt-4'>
          <div className=''>
            <h2 className='border-b-2 border-gray-400 mx-32 md:mx-80'>Trending</h2>
            <div className='overflow-x-scroll mx-8 md:mx-16 my-8 h-64 md:h-72'>
              <div className='flex flex-row'>
                {
                  [...post].map(({afor, description, gfor, id, name, photos, price, types}:propsitem) => (
                    <Carditems key={id} afor={afor} description={description} gfor={gfor} id={id} name={name} photos={photos} price={price} types={types}/>
                    ))
                }
              </div>
            </div>
          </div>
          <div className=''>
            <h2 className='border-b-2 border-gray-400 mx-32 md:mx-80'>New Arrivals</h2>
            <div className='overflow-x-scroll mx-8 md:mx-16 my-8 h-64 md:h-72'>
              <div className='flex flex-row'>
                {
                  [...post].map(({afor, description, gfor, id, name, photos, price, types}:propsitem) => (
                    <Carditems key={id} afor={afor} description={description} gfor={gfor} id={id} name={name} photos={photos} price={price} types={types}/>
                    ))
                }
              </div>
            </div>
          </div>
          <div className=''>
            <h2 className='border-b-2 border-gray-400 mx-32 md:mx-80'>Discounts</h2>
            <div className='overflow-x-scroll mx-8 md:mx-16 my-8 h-64 md:h-72'>
              <div className='flex flex-row'>
                {
                  [...post].map(({afor, description, gfor, id, name, photos, price, types}:propsitem) => (
                    <Carditems key={id} afor={afor} description={description} gfor={gfor} id={id} name={name} photos={photos} price={price} types={types}/>
                    ))
                }
              </div>
            </div>
          </div>
          <div className=''>
            <h2 className='border-b-2 border-gray-400 mx-32 md:mx-80'>Popular Brands</h2>
            <div className='overflow-x-scroll mx-8 md:mx-16 my-8 h-64 md:h-72'>
              <div className='flex flex-row'>
                {
                  [...post].map(({afor, description, gfor, id, name, photos, price, types}:propsitem) => (
                    <Carditems key={id} afor={afor} description={description} gfor={gfor} id={id} name={name} photos={photos} price={price} types={types}/>
                    ))
                } 
              </div>
            </div>
          </div>
        </div>
        <div className='shadow border-b-2 border-gray-400 mx-4 md:mx-16 mt-8'>
          <h1>Be a member</h1>
        </div>
        <div className='h-48'>
          <div>
            <h2 className='m-8'>Create Account and Join our Hood</h2>
            <div className='flex justify-around'>
              <button className='m-2 border-2 border-gray-400 shadow w-72 h-32 rounded-lg bg-slate-100 hover:bg-gradient-to-r from-cyan-500 to-blue-500'>
                <div className='flex justify-center items-center'>
                  <h1 className='text-gray-800'>Sign Up</h1>
                </div>
              </button>
              <button className='m-2 border-2 border-gray-400 shadow w-72 h-32 rounded-lg bg-slate-100 hover:bg-gradient-to-r from-cyan-500 to-blue-500'>
                <div className='flex justify-center items-center'>
                  <h1 className='text-gray-800'>Sign in</h1>
                </div>
              </button>
              <button className='m-2 border-2 border-gray-400 shadow w-72 h-32 rounded-lg bg-slate-100 hover:bg-gradient-to-r from-cyan-500 to-blue-500'>
                <div className='flex justify-center items-center'>
                  <h1 className='text-gray-800'>Contact Admins</h1>
                </div>
              </button>
            </div>
          </div>
        </div>
        <Contact/>
    </div>
  )
}

export default Home
