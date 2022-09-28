import React from 'react'
import Carditems from '../../Cards/Carditems'

const Home = () => {
  return (
    <div className=''>
        <div className='shadow border-b-2 border-gray-400 mx-32 mt-8'>
          <h1>Blackneb</h1>
        </div>
        <div className='flex flex-row'>
          <div className='h-96 w-72 shadow m-4 rounded-md border-black border-2'>
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
          <div className='flex justify-around flex-wrap'>
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
        <div className='shadow border-b-2 border-gray-400 mx-32 mt-8'>
          <h1>Shop By Class</h1>
        </div>
        <div className='flex flex-row flex-wrap justify-around p-4 mt-4'>
          <div>
            <h2 className='border-b-2 border-gray-400 mx-16'>Trending</h2>
            <div className='overflow-x-scroll w-72'>
              <div className='flex flex-row  px-4'>
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
          <div className='border-r-2 border-black h-72 border-gray-400'></div>
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
    </div>
  )
}

export default Home
