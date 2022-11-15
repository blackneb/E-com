import React,{useState, useEffect} from 'react'
import Menu from '../../../Icons/menu.png';
import { Carditems } from '../../Cards/Carditems';
import close from '../../../Icons/close.png';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { Card } from '@mui/material';

interface laptops{
  id:string;
  brand:string;
  name:string;
  ram:string;
  catagory:string;
  display:string;
  storagessd:string;
  storagehdd:string;
  cpuprocessor:string;
  cpugeneration:string;
  graphicscardname:string;
  graphicscardsize:string;
  battery:string;
  screensize:string;
  price:string;
  description:string;
  types:string;
  isdeleted:string;
  images:Array<string>
}

const Laptops = () => {
  const [open, setOpen] = useState(false);
  const [page, SetPage] = useState(1);
  const [itemsthere, setitemsthere] = useState(false);
  const [post,setpost] = useState<any[]>([]);

  useEffect(()=>{
    axios.get("http://localhost/blacknebecom/api/post/read_laptop.php").then((response) => {
      console.log(response.data.data);
      if(response.data.data === "no posts found"){
        setitemsthere(true);
      }
      else{
        setpost(response.data.data);
      }
    });
  },[]);
  if(!post) return null;
  const handleChange = (e:any, p:any) => {
    console.log(p);
    SetPage(p);
  }
  return (
    <div>
          <div className='shadow border-b-2 border-gray-400 mx-4 md:mx-16 mt-8'>
            <h1>Shop Brand Laptops</h1>
          </div>
          {(()=>{
              if(itemsthere){
                  return(
                    <div className='mt-10'>
                       <h1>we will add contents soon</h1>
                    </div>
                    )
              }
              else{
                  return(
                    <div className='flex flex-row'>
                      <div className='flex flex-col'>
                        <div onClick={()=>setOpen(!open)} className='md:hidden mx-2 w-6 mb-2'>
                          {open? <img  className='h-4 mt-2'  src={close}/> : <img className='h-4 mt-2' src={Menu}/>}
                        </div>
                      </div>
                    <div className='flex flex-row h-[]'>
                      <div className='mx-16 flex justify-around flex-wrap pr-8 mt-2'>
                        {
                          [...post].slice((page-1)*12,12*page).map(({id,brand,name,catagory,price,description,types,images}:laptops) => (
                            <Carditems key={id} id={id} brand={brand} catagory={catagory} name={name} price={price} description={description} types={types} images={images}/>
                            ))
                        }
                      </div>
                    </div>
                  </div>
                  )
              }
          })()}
        <div className='flex justify-center my-8'>
          <Stack spacing={2}>
            <Pagination count={10} variant="outlined" shape="rounded" onChange={handleChange} />
          </Stack>
        </div>
    </div>
  )
}

export default Laptops
