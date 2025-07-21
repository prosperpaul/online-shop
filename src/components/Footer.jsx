import React from 'react'
import logo from '/public/assets/logo.png'
import { Facebook } from 'lucide-react'
import { Youtube } from 'lucide-react'
import { TwitchIcon } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'
function Footer() {
  return <footer className='bg-slate-900 shadow-md'>
    <div className='container mx-auto px-4'>
      <div className='flex justify-between items-center flex-col md:flex-row py-10'>
        <h2 className='text-4xl font-bold text-white'>Subscribe Our Newsletter</h2>
        <form className='md:w-1/3 w-full mt-8 md:mt-0 relative bg-white'>
          <input type="text"  placeholder='Enter Your Email' className='py-4 px-4 rounded shadow-md w-full'/>
          <button className='bg-gray-200 py-3 px-4 rounded-full absolute right-3 top-1'>SUbmit</button>
        </form>
      </div>

    </div>

<div className='bg-slate-800 text-white py-8'>
  <div className='container mx-auto px-4'>
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8'>
      <div>

     
      <img src={logo} className='w-12 '/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur distinctio odit necessitatibus dicta, placeat ducimus eligendi labore repellat maxime iure possimus nesciunt. Saepe distinctio nisi, quidem dicta repellat nam!</p>
      <div className='flex items-center gap-8 mt-5'>
        <Facebook
        size={40}
        className='bg-white text-black rounded-md p-2'/>
        <Youtube
        size={40}
        className='bg-white text-black rounded-md p-2'/>
        <TwitchIcon
        size={40}
        className='bg-white text-black rounded-md p-2'/>
        <Instagram
        size={40}
        className='bg-white text-black rounded-md p-2'/>

      </div>
       </div>
       <div>
         <h2 className='text-2xl font-semibold my-4'>Pages</h2>
         <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
           <li>
            <Link to='/'>About</Link>
          </li>
           <li>
            <Link to='/'>FAQs</Link>
          </li>
           <li>
            <Link to='/'>Contact</Link>
          </li>
         </ul>
       </div>
       
       <div> <h2 className='text-2xl font-semibold my-4'>Category</h2>
         <ul>
          <li>
            <Link to='/'>Game Accessories</Link>
          </li>
           <li>
            <Link to='/'>Computer Accessories</Link>
          </li>
           <li>
            <Link to='/'>Monitor</Link>
          </li>
           <li>
            <Link to='/'>Gaming Laptop</Link>
          </li>
         </ul>
         </div>
       <div>
        <h2 className='text-2xl font-semibold my-4'>Category</h2>
        <p>70 Washigton Street, Umuahia, Abia State</p>
        <p>+234 7056 567 2345</p>
         <p>+234 7056 567 2345</p>
       </div>
       
    </div>
   

  </div>
  <div className='container mx-auto text-center text-white py-4'>
    <p>Copyright &copy; 2025 Prosper</p>
  </div>
</div>
  </footer>
}

export default Footer
