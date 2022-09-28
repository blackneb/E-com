import React from 'react'
import facebook from '../../Icons/facebook.png';
import email from '../../Icons/email.png';
import instagram from '../../Icons/instagram.png';
import telegram from '../../Icons/telegram.png';
import twitter from '../../Icons/twitter.png';
import youtube from '../../Icons/youtube.png'

const Footer = () => {
  return (
    <div className='shadow border-t-2 border-gray-400 p-8'>
      <div  className='mb-2 flex flex-row justify-around px-4'>
        <div>
            <p className='border-b-4 border-purple-600'>Get in touch</p>
            <ul className='mt-2'>
              <li>Phone</li>
              <li>Fax</li>
              <li>E-mail</li>
              <li>web</li>
            </ul>
          </div>
          <div>
            <p className='border-b-4 border-purple-600'>Quick Links</p>
            <ul className='mt-2'>
              <li>Home</li>
              <li>Laptops</li>
              <li>gaming</li>
              <li>Accessories</li>
              <li>TV</li>
              <li>PS</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
          </div>
          <div>
            <p className='border-b-4 border-purple-600'>Customer Service</p>
            <ul className='mt-2'>
              <li>Terms of use</li>
              <li>Privacy Policy</li>
              <li>Contact us</li>
              <li>How to pay</li>
              <li>FAQ?</li>
            </ul>
          </div>
          <div>
            <p className='border-b-4 border-purple-600'>Services</p>
            <ul className='mt-2'>
              <li>Free Delivery</li>
              <li>Book your favourites</li>
              <li>Easy cart</li>
              <li></li>
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
