import React from 'react'
import Carditems from '../../Cards/Carditems'

const Home = () => {
  return (
    <div className=''>
        <div className='shadow my-4'>
          <h1>Trending Items</h1>
        </div>
        <div className='flex flex-row'>
          <div className='w-96 shadow m-4 rounded-md border-black border-2'>
            <h2>Filter</h2>
            <div className='flex justify-start'>
              <ul className='flex flex-col m-4'>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button className=''>PC</button></li>
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
          </div>
        </div>
    </div>
  )
}

export default Home
