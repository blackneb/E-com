import React,{useState} from 'react'
import Menu from '../../../Icons/menu.png';
import close from '../../../Icons/close.png';
import Carditems from '../../Cards/Carditems';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Accessories = () => {
  const [open, setOpen]= useState(false);
  const [page, SetPage] = useState(1);

  const handleChange = (e:any, p:any) => {
    console.log(p);
    SetPage(p);
  }
  return (
    <div>
          <div className='flex flex-row'>
            <div className='flex flex-col'>
              <div onClick={()=>setOpen(!open)} className='mx-2 md:hidden w-6 mb-2'>
                {open? <img  className='h-4 mt-2'  src={close}/> : <img className='h-4 mt-2' src={Menu}/>}
              </div>
              <div className={`${open? "block" : "hidden"} md:block w-36 shadow mx-2 my-4 rounded-md`}>
                <h2 className='border-b-2 border-gray-400 mx-12'>Filter</h2>
              <div className={`flex justify-start overflow-x-scroll h-72`}>
                <ul className='flex flex-col m-4 '>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Joysticks</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Charger</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>USB Cables</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Power Bank</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Hard Disk</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Smartwatch</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>X-Box</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Drones</button></li>
                <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Speakers</button></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex justify-around flex-wrap pr-8 mt-2'>
            
          </div>
        </div>
        <div className='flex justify-center my-8'>
          <Stack spacing={2}>
            <Pagination count={10} variant="outlined" shape="rounded" onChange={handleChange} />
          </Stack>
        </div>
    </div>
  )
}

export default Accessories
