import React,{useState} from 'react'
import Menu from '../../../Icons/menu.png';
import close from '../../../Icons/close.png';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Gaming = () => {
  const [open, setOpen]= useState(false);
  const [page, SetPage] = useState(1);

  const handleChange = (e:any, p:any) => {
    console.log(p);
    SetPage(p);
  }
  return (
    <div>
          <div className='shadow border-b-2 border-gray-400 mx-4 md:mx-16 mt-8'>
            <h1>Shop Gaming Devices</h1>
          </div>
          <div className='flex flex-row'>
            <div className='flex flex-col'>
              <div onClick={()=>setOpen(!open)} className='mx-2 md:hidden w-6 mb-2'>
                {open? <img  className='h-4 mt-2'  src={close}/> : <img className='h-4 mt-2' src={Menu}/>}
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

export default Gaming
