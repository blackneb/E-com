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
import Cart from '../../../Icons/cart.png';
import battery from '../../../Icons/battery.png'
import DetailedAccessories from './DetailedAccessories';
import DetailedLaptop from './DetailedLaptop';
import DetailedTv from './DetailedTv';
import DetailedPhone from './DetailedPhone';

const Detailed = () => {
  const [imageshown, setimageshown] = useState<string>();
  const location = useLocation();
  const [more, setmore] = useState(true);
  const [loading, setloading] = useState(true);
  const loc = location.pathname;
  const path=loc.split("/")[2];
  const dispatch = useDispatch();
  const allitems = useSelector((state:any) => state.allitems.allitems);
  const post = useSelector((state:any) => state.currentitem);
  const [short,setshort] = useState<string>();
  function reloadingitem(id:any){
    setloading(true);
    setmore(true);
    axios.get("http://localhost/blacknebecom/api/post" + `/read_single.php?id=${id}`).then((response) => {
      setimageshown(response.data.images[0]);
      dispatch(currentitem(response.data));
      setshort(response.data.description.slice(0,150) + " ...");
      setloading(false);
    })
  }
  useEffect(() => {
    reloadingitem(path);
    if(allitems.length === 0){
      axios.get("http://localhost/blacknebecom/api/post/read.php").then((response) => {
          dispatch(addall(response.data.data));     
          if(response.data.data === "no posts found"){
          }
      });
    }
  }, []);
  function refreshPage(e:any){
    reloadingitem(e);
    //window.location.reload();
  }

  function Cartitem(){
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
          <div className='flex justify-center'>
            <div className='flex justify-center w-36 border-2 border-gray-400 bg-white text-black px-2 hover:bg-gray-400 hover:text-white m-4 md:m-0'>
              <img className='h-5 pt-1' src={Cart} alt="" />
              <button onClick={Cartitem} className=''>Add To Cart</button>
            </div>
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
                  <DetailedAccessories post={post} />
                )
              }
              else if(post.catagory === "laptop"){
                  return(
                    <DetailedLaptop post={post} />
                    )
              }
              else if(post.catagory === "tv"){
                return(
                  <DetailedTv post={post} />
                )
            }
            else if(post.catagory === "phone"){
              return(
                <DetailedPhone post={post} />
                )
          }
          })()}
          <div className='pt-4'>
          <div className='flex flex-row my-2'>
          <div className='flex flex-row'>
                <img className='h-8' src={description} alt=''/>
                <p className='ml-2'>Description:</p>
              </div>
            <div className=''>
              <p className='ml-2 w-96 text-justify'>{more? short : post.description} </p>
              <p onClick={()=>{setmore(!more)}} >{more? "show more" : "show less"}</p>
            </div>
          </div>
          </div>
      </div>
        <div className='pt-10'>
          <h2 className='border-b-2 border-gray-400 mx-32 md:mx-72'>you may also like</h2>
            <div className='overflow-x-scroll mx-8 md:mx-16 my-8 h-64 md:h-72'>
              <div className='flex flex-row'>
            {
              [...similaritems].map(({id,brand,name,catagory,price,description,types,images}:any) => (
                <div onClick={()=>{reloadingitem(id)}}>
                  <Carditems key={id} id={id} brand={brand} catagory={catagory} name={name} price={price} description={description} types={types} images={images}/>
                </div>
                ))
            }
                </div>
              </div>         
          </div>
    </div>
}

export default Detailed
