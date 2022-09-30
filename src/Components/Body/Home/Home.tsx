import React,{useState} from 'react';
import Carditems from '../../Cards/Carditems';
import Menu from '../../../Icons/menu.png';
import close from '../../../Icons/close.png';

const Home = () => {
  const [open, setOpen]= useState(true);
  return (
    <div className=''>
        <div className='shadow border-b-2 border-gray-400 mx-4 md:mx-32 mt-8'>
          <h1>Shop every item You want</h1>
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-col'>
            <div onClick={()=>setOpen(!open)} className='mx-2 w-6 mb-2'>
              {open? <img  className='h-4 mt-2'  src={close}/> : <img className='h-4 mt-2' src={Menu}/>}
            </div>
            <div className={`${open? "block" : "hidden"} h-96 w-32 shadow mx-2 rounded-md border-2`}>
              <h2 className='border-b-2 border-gray-400'>Filter</h2>
            <div className={`flex justify-start`}>
              <ul className='flex flex-col m-4'>
                <li className='py-1 hover:border-l-2 border-black text-left'><button>PC</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left'><button>Laptops</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left'><button>Phones</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left'><button>Joysticks</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left'><button>Tv</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left'><button>Charger</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left'><button>USB Cables</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left'><button>PlayStations</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left'><button>Power Bank</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left'><button>Hard Disk</button></li>
              </ul>
            </div>
          </div>
          </div>
          <div className='flex justify-around flex-wrap overflow-y-scroll h-[28rem] pr-8'>
            <Carditems/>
            <Carditems/>
            <Carditems/>
            <Carditems/>
            <Carditems/>
            <Carditems/>
            <Carditems/>
            <Carditems/>
            <Carditems/>
            <Carditems/>
            <Carditems/>
            <Carditems/>
            <Carditems/>
            <Carditems/>
            <Carditems/>
            <Carditems/>
            <Carditems/>
            <Carditems/>
            <Carditems/>
            <Carditems/>
          </div>
        </div>
        <div className='shadow border-b-2 border-gray-400 mx-4 md:mx-32 mt-8'>
          <h1>Shop By Class</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-around p-4 mt-4'>
          <div>
            <h2 className='border-b-2 border-gray-400 mx-32 md:mx-80'>Trending</h2>
            <div className='overflow-x-scroll mx-20 my-8 h-48 md:h-72'>
              <div className='flex flex-row  p-4'>
                <Carditems/>
                <Carditems/>
                <Carditems/>
                <Carditems/>
                <Carditems/>
                <Carditems/>
                <Carditems/>
              </div>
            </div>
          </div>
          <div>
          <h2 className='border-b-2 border-gray-400 mx-32 md:mx-80'>New Arrivals</h2>
          <div className='overflow-x-scroll mx-20 my-8 h-48 md:h-72'>
            <div className='flex flex-row  p-4 '>
                  <Carditems/>
                  <Carditems/>
                  <Carditems/>
                  <Carditems/>
                  <Carditems/>
                </div>
            </div>
          </div>
          <div>
            <h2 className='border-b-2 border-gray-400 mx-32 md:mx-80'>Discounts</h2>
            <div className='overflow-x-scroll mx-20 my-8 h-48 md:h-72'>
              <div className='flex flex-row  p-4 '>
                <Carditems/>
                <Carditems/>
                <Carditems/>
                <Carditems/>
                <Carditems/>
              </div>
            </div>
          </div>
          <div>
            <h2 className='border-b-2 border-gray-400 mx-28 md:mx-72'>Popular Brands</h2>
            <div className='overflow-x-scroll mx-20 my-8 h-48 md:h-72'>
              <div className='flex flex-row  p-4 '>
                <Carditems/>
                <Carditems/>
                <Carditems/>
                <Carditems/>
                <Carditems/>
              </div>
            </div>
          </div>
        </div>
        <div className='shadow border-b-2 border-gray-400 mx-4 md:mx-32 mt-8'>
          <h1>Be a member</h1>
        </div>
        <div className='h-48'>
          <div>
            <h2 className='m-8'>Create Account and Join our Hood</h2>
            <div className='flex justify-around'>
              <button className='m-2 border-2 border-gray-400 shadow w-72 h-32 rounded-lg bg-gray-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500'>
                <div className='flex justify-center items-center'>
                  <h1 className='text-white'>Sign Up</h1>
                </div>
              </button>
              <button className='m-2 border-2 border-gray-400 shadow w-72 h-32 rounded-lg bg-gray-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500'>
                <div className='flex justify-center items-center'>
                  <h1 className='text-white'>Sign in</h1>
                </div>
              </button>
              <button className='m-2 border-2 border-gray-400 shadow w-72 h-32 rounded-lg bg-gray-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500'>
                <div className='flex justify-center items-center'>
                  <h1 className='text-white'>Contact Admins</h1>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className='shadow border-b-2 border-gray-400 mx-4 md:mx-32 mt-8'>
          <h1>Contact Our Admins</h1>
        </div>
    </div>
  )
}

export default Home
