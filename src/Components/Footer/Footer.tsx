import React from 'react'
import facebook from '../../Icons/facebook.png';
import email from '../../Icons/email.png';
import instagram from '../../Icons/instagram.png';
import telegram from '../../Icons/telegram.png';
import twitter from '../../Icons/twitter.png';
import youtube from '../../Icons/youtube.png'

const Footer = () => {
  return (
    <div className='shadow border-t-2 bg-slate-50 border-gray-400 p-8 mt-16'>
      <div  className='mb-2 grid grid-cols-2 md:flex md:flex-row flex-wrap md:justify-around md:px-4'>
        <div className='md:mx-8 md:mt-4 mt-2'>
            <p className='border-b-4 border-purple-600 w-28 text-lg'>Get in touch</p>
            <ul className='mt-2 text-gray-600'>
              <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Phone</button></li>
              <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>FAX</button></li>
              <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>E-mail</button></li>
              <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Web</button></li>
            </ul>
          </div>
          <div className='md:mx-8 md:mt-4 mt-2'>
            <p className='border-b-4 border-purple-600 w-24 text-lg'>Quick Links</p>
            <ul className='mt-2 text-gray-600'>
              <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Home</button></li>
              <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Laptops</button></li>
              <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Gaming</button></li>
              <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Phones</button></li>
              <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Accessories</button></li>
              <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Tv</button></li>
              <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Ps</button></li>
              <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Contact</button></li>
              <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>About</button></li>
            </ul>
          </div>
          <div className='md:mx-8 md:mt-4 mt-2'>
            <p className='border-b-4 border-purple-600 w-36 text-lg'>Customer Service</p>
            <ul className='mt-2 text-gray-600'>
              <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Terms Of Use</button></li>
              <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Privacy Policy</button></li>
              <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Contact Us</button></li>
              <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>How to pay</button></li>
              <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>FAQ?</button></li>
            </ul>
          </div>
          <div className='md:mx-8 md:mt-4 mt-2'>
            <p className='border-b-4 border-purple-600 w-20 text-lg'>Services</p>
            <ul className='mt-2 text-gray-600'>
              <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Free Delivery</button></li>
              <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Book Your Favourites</button></li>
              <li className='py-1 hover:border-l-2 border-black text-left p-1'><button>Easy Cart</button></li>

            </ul>
          </div>
      </div>
      <hr className='mx-10'/>
      <div>
        <div className='flex justify-center py-4'>
          <p className='border-b-4 border-purple-600 w-24'>Social Media</p>
        </div>
            <ul className='flex flex-row justify-center py-2'>
              <li className='px-4'>
                <img className='w-6' src={facebook} alt=''/>
              </li>
              <li className='px-4'>
                <img className='w-6' src={email} alt=''/>
              </li>
              <li className='px-4'>
                <img className='w-6' src={instagram} alt=''/>
              </li>
              <li className='px-4'>
                <img className='w-6' src={telegram} alt=''/>
              </li>
              <li className='px-4'>
                <img className='w-6' src={twitter} alt=''/>
              </li>
              <li className='px-4'>
                <img className='w-6' src={youtube} alt=''/>
              </li>
            </ul>
          </div>      
    </div>
  )
}

export default Footer
