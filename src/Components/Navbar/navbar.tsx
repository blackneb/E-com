import React,{useState} from 'react'
import menu from '../../Icons/menu.png';
import close from '../../Icons/close.png'

const Navbar = () => {
    let links = [
        {name:"Laptops",link:"#"},
        {name:"Gaming",link:"#"},
        {name:"Accessories",link:"#"},
        {name:"TV",link:"#"},
        {name:"PS",link:"#"},
        {name:"Contact",link:"#"},
        {name:"About",link:"#"},
    ];
    const [open, setOpen] = useState(false);
  return (
    <>
    <nav className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div className='font-bold text-xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                    Blackneb
            </div>
            <div  onClick={()=>setOpen(!open)} className='text-xl absolute right-3 top-2 cursor-pointer md:hidden'>
                {open? <img  className='h-5 mt-2'  src={close}/> : <img className='h-6 mt-2' src={menu}/>}
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                {
                    links.map((link) => (
                        <li key={link.name} className='md:ml-8 text-sm md:my-0 my-1' >
                            {link.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar
