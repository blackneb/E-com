import React from 'react'
import Carditems from '../../Cards/Carditems'

const Home = () => {
  return (
    <div className=''>
        <div className='shadow border-b-2 border-gray-400 mx-4 md:mx-32 mt-8'>
          <h1>Shop every item You want</h1>
        </div>
        <div className='flex flex-row'>
          <div className='h-96 w-72 shadow m-4 rounded-md border-2'>
            <h2 className='border-b-2 border-gray-400 mx-14'>Filter</h2>
            <div className='flex justify-start'>
              <ul className='flex flex-col m-4'>
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
              </ul>
            </div>
          </div>
          <div className='flex justify-around flex-wrap overflow-y-scroll h-[32rem] pr-8'>
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
        <div className='flex flex-row flex-wrap justify-around p-4 mt-4'>
          <div>
            <h2 className='border-b-2 border-gray-400 mx-14'>Trending</h2>
            <div className='overflow-x-scroll w-72'>
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
          <div className='md:border-r-2 border-black h-72 border-gray-400'></div>
          <div>
          <h2 className='border-b-2 border-gray-400 mx-14'>New Arrivals</h2>
          <div className='overflow-x-scroll w-72'>
            <div className='flex flex-row  p-4 '>
                  <Carditems/>
                  <Carditems/>
                  <Carditems/>
                  <Carditems/>
                  <Carditems/>
                </div>
            </div>
          </div>
          <div className='border-r-2 border-black h-72 border-gray-400'></div>
          <div>
            <h2 className='border-b-2 border-gray-400 mx-14'>Discounts</h2>
            <div className='overflow-x-scroll w-72'>
              <div className='flex flex-row  p-4 '>
                <Carditems/>
                <Carditems/>
                <Carditems/>
                <Carditems/>
                <Carditems/>
              </div>
            </div>
          </div>
          <div className='border-r-2 border-black h-72 border-gray-400'></div>
          <div>
            <h2 className='border-b-2 border-gray-400 mx-14'>Popular Brands</h2>
            <div className='overflow-x-scroll w-72'>
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
