import React,{useState, useEffect} from 'react'
import iphone from '../../../Images/iphone.jpg'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { Carditems } from '../../Cards/Carditems'
import { addall,addtocart, currentitem } from '../../../Redux/Actions';
import arrayShuffle from 'array-shuffle';


import ram from '../../../Icons/ram.png'
import cpu from '../../../Icons/cpu.png'
import display from '../../../Icons/display.png'
import graphics from '../../../Icons/graphics.png'
import price from '../../../Icons/price.png'
import storage from '../../../Icons/storage.png'
import description from '../../../Icons/info.png'
import battery from '../../../Icons/battery.png'
import { Iaccessories } from '../../../Models/Models'
import { current } from '@reduxjs/toolkit';




interface accessories {
  id:string,
  brand:string,
  name:string,
  catagory:string,
  price:string,
  description:string,
  types:string,
  isdeleted:string,
  images:Array<string>
}

const Detailed = () => {
  const [imageshown, setimageshown] = useState<string>();
  const location = useLocation();
  const [loading, setloading] = useState(true);
  const loc = location.pathname;
  const path=loc.split("/")[2];
  const dispatch = useDispatch();
  const allitems = useSelector((state:any) => state.allitems.allitems);
  function reloadingitem(){
    setloading(true);
    axios.get("http://localhost/blacknebecom/api/post" + `/read_single.php?id=${path}`).then((response) => {
      setimageshown(response.data.images[0]);
      dispatch(currentitem(response.data));
      setloading(false);
    })
    if(allitems.length === 0){
      axios.get("http://localhost/blacknebecom/api/post/read.php").then((response) => {
          dispatch(addall(response.data.data));     
          if(response.data.data === "no posts found"){
          }
      });
    }
  }
  const post = useSelector((state:any) => state.currentitem);
  useEffect(() => {
    reloadingitem();
  }, []);
   function refreshPage() {
     reloadingitem();
     //window.location.reload();
   }
  function cartitem(){
    dispatch(addtocart(path));
    alert(path);
  }
  const similaritems = allitems.filter((items:any) => items.type === post.type && items.catagory === post.catagory);

  return loading? <p>Loading...</p>  : 
  <div>
      <div className='shadow border-b-2 border-gray-400 mx-4 md:mx-16 mt-8 mt-10'>
          <h1 className='text-md'>{post.name}</h1>
        </div>
        <div className='ml-8 h-24'>
          <div className='flex flex-row flex-wrap mt-4'>
            {
              post.images.map((items:string) => (
                <div key={items} className='hover:border-b-2 mx-4' onClick={()=> setimageshown(items)}>
                  <img className='h-20 rounded-md p-2' src={"http://localhost/blacknebecom/api/post/photos/" + items} alt=''/>
                </div>  
              ))
            }
          </div>
        </div>
      <div className='flex flex-wrap justify-start  pt-8'>
        <div className='w-[32rem] ml-20 '>
          <div className=''>
            <img className='h-96 shadow rounded-md' src={"http://localhost/blacknebecom/api/post/photos/" + imageshown} alt=''/>
          </div>
        </div>
        
        {(()=>{
              if(post.catagory === "accessories"){
                  return(
                    <div className='ml-8'>
                      <p className='font-bold font-2xl'>Laptop Specs</p>
                      <div className='text-left'>
                      <div className='flex flex-row my-2'>
                          <img className='h-8' src={price} alt=''/>
                          <p className='ml-2'>Brand: {post.brand} </p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <img className='h-8' src={price} alt=''/>
                          <p className='ml-2'>Price: {post.price + " birr"} </p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <div className='flex flex-row'>
                            <div className='flex flex-row'>
                              <img className='h-8' src={description} alt=''/>
                              <p className='ml-2'>Description:</p>
                            </div>
                          </div>
                          <p className='ml-2 w-72'>{post.description} </p>
                        </div>
                        <div className='flex justify-center'>
                          <button onClick={cartitem} className='border-2 border-black rounded-2xl bg-white text-black px-2 hover:bg-black hover:text-white m-4 md:m-0'>Cart Item</button>
                        </div>            
                      </div>
                    </div>
                  )
              }
              else if(post.catagory === "laptop"){
                  return(
                    <div className='ml-8'>
                      <p className='font-bold font-2xl'>Laptop Specs</p>
                      <div className='text-left'>
                        <div className='flex flex-row my-2'>
                          <img className='h-8' src={ram} alt=''/>
                          <p className='ml-2'>RAM: {post.ram}</p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <img className='h-8' src={display} alt=''/>
                          <p className='ml-2'>Display: {post.display} </p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <img className='h-8' src={storage} alt=''/>
                          <p className='ml-2'>Storage: {post.storagessd +" SSD " + post.storagehdd + " HDD"}</p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <img className='h-8' src={cpu} alt=''/>
                          <p className='ml-2'>CPU: {post.cpuprocessor + " " + post.cpugeneration} </p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <img className='h-8' src={graphics} alt=''/>
                          <p className='ml-2'>Graphics card: {post.graphicscardname + " " + post.graphicscardsize} </p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <img className='h-8' src={battery} alt=''/>
                          <p className='ml-2'>Battery: {post.battery}</p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <img className='h-8' src={price} alt=''/>
                          <p className='ml-2'>Price: {post.price + " birr"} </p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <div className='flex flex-row'>
                            <div className='flex flex-row'>
                              <img className='h-8' src={description} alt=''/>
                              <p className='ml-2'>Description:</p>
                            </div>
                          </div>
                          <p className='ml-2 w-72'>{post.description} </p>
                        </div>
                        <div className='flex justify-center'>
                          <button onClick={cartitem} className='border-2 border-black rounded-2xl bg-white text-black px-2 hover:bg-black hover:text-white m-4 md:m-0'>Cart Item</button>
                        </div>            
                      </div>
                    </div>
                    )
              }
              else if(post.catagory === "tv"){
                return(
                  <div className='ml-8'>
                      <p className='font-bold font-2xl'>Laptop Specs</p>
                      <div className='text-left'>
                        <div className='flex flex-row my-2'>
                          <img className='h-8' src={ram} alt=''/>
                          <p className='ml-2'>Brand: {post.brand}</p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <img className='h-8' src={ram} alt=''/>
                          <p className='ml-2'>Screensize: {post.screensize}</p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <img className='h-8' src={display} alt=''/>
                          <p className='ml-2'>DisplayTechnology: {post.displaytechnology} </p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <img className='h-8' src={cpu} alt=''/>
                          <p className='ml-2'>Resolution: {post.resolution} </p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <img className='h-8' src={cpu} alt=''/>
                          <p className='ml-2'>Refreshrate: {post.refreshrate} </p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <img className='h-8' src={battery} alt=''/>
                          <p className='ml-2'>Connectivity: {post.connectivity}</p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <img className='h-8' src={price} alt=''/>
                          <p className='ml-2'>Price: {post.price + " birr"} </p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <div className='flex flex-row'>
                            <div className='flex flex-row'>
                              <img className='h-8' src={description} alt=''/>
                              <p className='ml-2'>Description:</p>
                            </div>
                          </div>
                          <p className='ml-2 w-72'>{post.description} </p>
                        </div>
                        <div className='flex justify-center'>
                          <button onClick={cartitem} className='border-2 border-black rounded-2xl bg-white text-black px-2 hover:bg-black hover:text-white m-4 md:m-0'>Cart Item</button>
                        </div>            
                      </div>
                    </div>
                )
            }
            else if(post.catagory === "phone"){
              return(
                <div>
                  <div className='ml-8'>
                      <p className='font-bold font-2xl'>Laptop Specs</p>
                      <div className='text-left'>
                      <div className='flex flex-row my-2'>
                          <img className='h-8' src={ram} alt=''/>
                          <p className='ml-2'>Brand: {post.brand}</p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <img className='h-8' src={ram} alt=''/>
                          <p className='ml-2'>Name: {post.name}</p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <img className='h-8' src={ram} alt=''/>
                          <p className='ml-2'>Color: {post.color}</p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <img className='h-8' src={ram} alt=''/>
                          <p className='ml-2'>RAM: {post.ram}</p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <img className='h-8' src={ram} alt=''/>
                          <p className='ml-2'>ScreenSize: {post.screensize}</p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <img className='h-8' src={ram} alt=''/>
                          <p className='ml-2'>Camera: {post.camerafront + " front " + post.cameraback + " back"}</p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <img className='h-8' src={storage} alt=''/>
                          <p className='ml-2'>Storage: {post.storage} </p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <img className='h-8' src={price} alt=''/>
                          <p className='ml-2'>Price: {post.price + " birr"}</p>
                        </div>
                        <div className='flex flex-row my-2'>
                          <div className='flex flex-row'>
                            <div className='flex flex-row'>
                              <img className='h-8' src={description} alt=''/>
                              <p className='ml-2'>Description:</p>
                            </div>
                          </div>
                          <p className='ml-2 w-72'>{post.description} </p>
                        </div>
                        <div className='flex justify-center'>
                          <button onClick={cartitem} className='border-2 border-black rounded-2xl bg-white text-black px-2 hover:bg-black hover:text-white m-4 md:m-0'>Cart Item</button>
                        </div>            
                      </div>
                    </div>
                </div>
                )
          }
          })()}
      </div>
        <div className='pt-10'>
          <h2 className='border-b-2 border-gray-400 mx-32 md:mx-72'>you may also like</h2>
            <div className='overflow-x-scroll mx-8 md:mx-16 my-8 h-64 md:h-72'>
              <div className='flex flex-row' onClick={reloadingitem} >
            {
              [...similaritems].map(({id,brand,name,catagory,price,description,types,images}:any) => (
                <Carditems key={id} id={id} brand={brand} catagory={catagory} name={name} price={price} description={description} types={types} images={images}/>
                ))
            }

                </div>
              </div>         
          </div>
    </div>
}

export default Detailed
