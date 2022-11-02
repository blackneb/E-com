import React,{useState} from 'react'
import {useNavigate, Link } from 'react-router-dom';
import { adduserautorization } from '../../Redux/Actions';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { Iuserautorization } from '../../Models/Models';

import menu from '../../Icons/menu.png';
import close from '../../Icons/close.png';
import Home from '../../Icons/home.png';
import Laptop from '../../Icons/laptop.png';
import Gaming from '../../Icons/games.png';
import Accessories from '../../Icons/accessories.png';
import Phone from '../../Icons/phone.png';
import Tv from '../../Icons/television.png';
import Contact from '../../Icons/contact.png';
import About from '../../Icons/about.png';
import Cart from '../../Icons/cart.png';
import Profile from '../../Icons/profile.png'
import Upload from '../../Icons/upload.png';
import { useDispatch,useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CartCards from '../Cards/CartCards';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';


const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Navbar = () => {
  const dispatch = useDispatch();
    const carteditems = useSelector((state:any) => state.addtocart.items);
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
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('md');
  const [opening, setOpening] = React.useState(false);
  const navigate = useNavigate();
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpening((prevOpen) => !prevOpen);
  };

  const handleLogging = () => {
    console.log(userinfo.logged);
    if(userinfo.userlogged === false) {
      navigate("/signin"); 
    }
    else if(userinfo.userlogged === true){
      const statemessage:Iuserautorization = {
        userlogged:false,
        usertype:"",
        firstname:"",
        lastname:"",
        username:"",
        email:"",
        phone:"",
    }
    dispatch(adduserautorization(statemessage));
    navigate("/");
    }
    setOpening(false);
  }
  const handleAccount = () => {
    setOpening(false);
  }

  const handleCloseing = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpening(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpening(false);
    } else if (event.key === 'Escape') {
      setOpening(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(opening);
  React.useEffect(() => {
    if (prevOpen.current === true && opening === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = opening;
  }, [opening]);

    const [opens, setOpens] = React.useState(false);

    const handleClickOpen = () => {
        setOpens(true);
    };

    const handleClose = () => {
        setOpens(false);
    };
  return (
    <>
    <Dialog
        fullWidth
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
              <CartCards items={carteditems} />
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
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={carteditems.length} color="secondary">
                        <img className='h-4 mt-3' src={Cart} alt='' ></img>
                        <p className='p-2 text-sm'>Cart</p>
                      </StyledBadge>
                    </IconButton>
                </li>
                {/* <Link to="/signin">
                    <li className={`md:ml-8 text-sm md:my-0 my-1 ${userinfo.userlogged? "hidden" : "block"}`}>
                        <div className='flex justify-center bg-purple-600 rounded-md px-2'>
                            <img className='h-4 mt-2.5' src={Cart} alt=''/>
                            <p className='p-2'>Login</p>
                        </div>
                    </li>
                </Link> */}
                <Stack direction="row" spacing={2}>
                  <div>
                    <Button
                      ref={anchorRef}
                      id="composition-button"
                      aria-controls={open ? 'composition-menu' : undefined}
                      aria-expanded={open ? 'true' : undefined}
                      aria-haspopup="true"
                      onClick={handleToggle}
                    >
                      <img className='h-6' src={Profile} alt='' />
                    </Button>
                    <Popper
                      open={opening}
                      anchorEl={anchorRef.current}
                      role={undefined}
                      placement="bottom-start"
                      transition
                      disablePortal
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === 'bottom-start' ? 'left top' : 'left bottom',
                          }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={handleCloseing}>
                              <MenuList
                                autoFocusItem={opening}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                                onKeyDown={handleListKeyDown}
                              >
                                <MenuItem onClick={handleAccount}>My account</MenuItem>
                                <MenuItem onClick={ handleLogging}> {userinfo.userlogged? "Logout" : "Log in"}</MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </div>
                </Stack>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar
