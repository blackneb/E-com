import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import menu from '../../Icons/menu.png';
import close from '../../Icons/close.png';
import Home from '../../Icons/home.png';
import Laptop from '../../Icons/laptop.png';
import Gaming from '../../Icons/games.png';
import Accessories from '../../Icons/accessories.png';
import Phone from '../../Icons/phone.png';
import Tv from '../../Icons/television.png';
import Ps from '../../Icons/ps.png';
import Contact from '../../Icons/contact.png';
import About from '../../Icons/about.png';
import Cart from '../../Icons/cart.png';
import Upload from '../../Icons/upload.png';
import { useDispatch,useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Navbar = () => {
    const [opens, setOpens] = React.useState(false);

    const handleClickOpen = () => {
        setOpens(true);
    };

    const handleClose = () => {
        setOpens(false);
    };
    const dispatch = useDispatch();
    const carteditems = useSelector((state:any) => state.addtocart.itemsid);
    const userinfo = useSelector((state:any) => state.user);
    console.log(userinfo.usertype);
    let links:{name: string, link:any, icon:any}[] = [
        {name:"Home",link:"/",icon:<img className='h-4 mt-2.5' src={Home} alt=''/>},
        {name:"Laptops",link:"/laptops",icon:<img className='h-4 mt-2.5' src={Laptop} alt=''/>},
        {name:"Gaming",link:"/gaming",icon:<img className='h-4 mt-2.5' src={Gaming} alt=''/>},
        {name:"Accessories",link:"/accessories",icon:<img className='h-4 mt-2.5' src={Accessories} alt=''/>},
        {name:"Phone",link:"/phone",icon:<img className='h-4 mt-2.5' src={Phone} alt=''/>},
        {name:"TV",link:"/tv",icon:<img className='h-4 mt-2.5' src={Tv} alt=''/>},
        //{name:"PS",link:"/ps",icon:<img className='h-4 mt-2.5' src={Ps} alt=''/>},
        {name:"Contact",link:"/contact",icon:<img className='h-4 mt-2.5' src={Contact} alt=''/>},
        {name:"About",link:"/about",icon:<img className='h-4 mt-2.5' src={About} alt=''/>},
    ];
    const [open, setOpen] = useState(false);
  return (
    <>
    <Dialog
        open={opens}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Cart"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <ul>
              {
                carteditems.map((items:any) => (
                  <div className='w-96'>
                    <li>{items}</li>
                  </div>
                ))
              }
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button autoFocus>Cart</Button>
        </DialogActions>
      </Dialog>
    <nav className='shadow-md w-full sticky top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div className='font-bold text-xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                   <p className='text-black' >Blackneb</p>
            </div>
            <div  onClick={()=>setOpen(!open)} className='text-xl absolute right-3 top-2 cursor-pointer md:hidden'>
                {open? <img  className='h-5 mt-2'  src={close} alt=''/> : <img className='h-6 mt-2' src={menu} alt=''/>}
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-purple-600 md:bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-0 transition-all duration-500 ease-in ${open ? 'top-16 ':'top-[-490px]'}`}>
                {
                    links.map((link) => (
                        <Link to={link.link}>
                            <li key={link.name} className={`md:ml-8 text-sm md:my-0 my-1`} onClick={() => setOpen(false)} >
                                <div className='flex justify-center'>
                                    {link.icon}
                                    <p className='p-2'>{link.name}</p>
                                </div>
                            </li>
                        </Link>
                    ))
                }
                <li className='md:ml-8 text-sm md:my-0 my-1' onClick={handleClickOpen}>
                    <div className='flex justify-center' >
                        <img className='h-4 mt-3' src={Cart} alt='' ></img>
                        <p className='p-2'>Cart</p>
                    </div>
                </li>
                <Link to="/signin">
                    <li className={`md:ml-8 text-sm md:my-0 my-1 ${userinfo.userlogged? "hidden" : "block"}`}>
                        <div className='flex justify-center bg-purple-600 rounded-md px-2'>
                            <img className='h-4 mt-2.5' src={Cart} alt=''/>
                            <p className='p-2'>Login</p>
                        </div>
                    </li>
                </Link>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar
