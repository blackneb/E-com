import React,{useState} from 'react'
import Menu from '../../../Icons/menu.png';
import close from '../../../Icons/close.png';
import Carditems from '../../Cards/Carditems';


const Gaming = () => {
  const [open, setOpen]= useState(false);
  return (
    <div>
          <div className='flex flex-row'>
            <div className='flex flex-col'>
              <div onClick={()=>setOpen(!open)} className='mx-2 md:hidden w-6 mb-2'>
                {open? <img  className='h-4 mt-2'  src={close}/> : <img className='h-4 mt-2' src={Menu}/>}
              </div>
              <div className={`${open? "block" : "hidden"} md:block mt-4 w-40 shadow mx-2 rounded-md`}>
                <h2 className='border-b-2 border-gray-400 mx-12'>Filter</h2>
              <div className={`flex justify-start overflow-x-scroll h-72`}>
                <ul className='flex flex-col m-4 '>
                  <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Oculus</button></li>
                  <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Playstation</button></li>
                  <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>XBOX</button></li>
                  <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>VideoGames</button></li>
                  <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>KeyBoard</button></li>
                  <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Mouse</button></li>
                  <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>G-Laptops</button></li>
                  <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Controllers</button></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex justify-around flex-wrap pr-8 mt-2'>
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
    </div>
  )
}

export default Gaming
